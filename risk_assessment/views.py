from django.shortcuts import render
from django.http import JsonResponse
# Import models from currentScams app
from currentScams.models import ScamReport, ScamCategory, Complainant
import pandas as pd
from django.views.decorators.http import require_GET
import requests
from django.views.decorators.csrf import csrf_exempt
import json


# Create the dictionary for links based on 'Category_Level_2'


contact_mode_links = {
    'Email': 'https://scamguard.live/email-scams',
    'Fax': 'https://scamguard.live/text-scams',
    'Internet': 'https://scamguard.live/website-scams',
    'Mail': 'https://scamguard.live/text-scams',
    'Mobile apps': 'https://scamguard.live/website-scams',
    'Phone call': 'https://scamguard.live/phone-scams',
    'Social media/Online forums': 'https://scamguard.live/social-media-scams',
    'Text message': 'https://scamguard.live/text-scams'
}

def load_data():
    # Fetch data from the database using Django ORM
    complainant_qs = Complainant.objects.all().values()
    scam_category_qs = ScamCategory.objects.all().values()
    scam_report_qs = ScamReport.objects.all().values()

    # Convert QuerySets to DataFrames
    complainant_df = pd.DataFrame(list(complainant_qs))
    scam_category_df = pd.DataFrame(list(scam_category_qs))
    scam_report_df = pd.DataFrame(list(scam_report_qs))

    # Merge DataFrames
    merged_df = scam_report_df.merge(complainant_df, left_on='complainant_id', right_on='complainant_id', how='left')
    whole_df = merged_df.merge(scam_category_df, left_on='category_id', right_on='category_id', how='left')

    # List of categories to filter
    categories = ['Attempts to gain your personal information', 'Buying or selling', 'Dating and romance', 'Investment scams', 'Jobs and employment']
    
    # List of contact modes to filter
    contact_modes = ['Email', 'Fax', 'Internet', 'Mail', 'Mobile apps', 'Phone call', 'Social media/Online forums', 'Text message']

    # Filter rows where 'Category_Level_2' contains any of the values in the list
    filtered_df = whole_df[whole_df['category_level_2'].isin(categories)]
    
    # Exclude rows where 'Category_Level_2' or 'Category_Level_3' contains the word 'other'
    filtered_df = filtered_df[~filtered_df['category_level_2'].str.contains('other', case=False)]
    filtered_df = filtered_df[~filtered_df['category_level_3'].str.contains('other', case=False)]
    
    # Filter rows where 'Scam___Contact_Mode' contains any of the specified contact modes
    filtered_df = filtered_df[filtered_df['scam_contact_mode'].isin(contact_modes)]

    # Convert 'start_of_month' to datetime and filter by the latest year
    filtered_df['start_of_month'] = pd.to_datetime(filtered_df['start_of_month'])
    latest_year = filtered_df['start_of_month'].dt.year.max()
    filtered_df = filtered_df[filtered_df['start_of_month'].dt.year == latest_year]

    return filtered_df

# filtered_df = load_data()

# View function for AC5.1
@csrf_exempt
def get_ac51_view(request):

    if request.method == 'POST':
        filtered_df = load_data()
        data = json.loads(request.body)
        selected_contact_method = data.get('contact_method')

        # Apply filtering based on the selected contact method
        filtered_data = filtered_df[filtered_df['scam_contact_mode'] == selected_contact_method]

        # Group the data, calculate the averages, and create the required columns
        ac51_grouped = filtered_data.groupby(['scam_contact_mode', 'complainant_age', 'category_level_2']).agg({
            'amount_lost': 'sum',
            'number_of_reports': 'sum',
            'group_count': 'sum'
        }).reset_index()

        # Create the Average_Reports and Average_Loss columns
        ac51_grouped['Average_Reports'] = (ac51_grouped['number_of_reports'] / ac51_grouped['group_count']).round(0).astype(int)
        ac51_grouped['Average_Loss'] = (ac51_grouped['amount_lost'] / ac51_grouped['number_of_reports']).round(0).astype(int)

        # Drop some non needed columns
        ac51_grouped = ac51_grouped.drop(columns=['amount_lost', 'number_of_reports', 'group_count'])

        # Create the dataframe for seniors only
        ac51_seniors = ac51_grouped[ac51_grouped['complainant_age'] == '65 and over']
    
        # Create the data frame for all ages
        ac51_national = ac51_grouped[ac51_grouped['complainant_age'] == 'All Ages']

        # merge senior dataframe with national dataframe
        ac51_merged_df = ac51_seniors.merge(ac51_national, on=['scam_contact_mode', 'category_level_2'], how='left', suffixes=('_seniors', '_national'))
        
        # Create the 'Exposure Risk' column
        ac51_merged_df['Exposure Risk'] = ((ac51_merged_df['Average_Reports_seniors'] / ac51_merged_df['Average_Reports_national'])).round(1)

        # Keep the top 3 rows for each unique value in 'Scam_Contact_Mode'
        top_3_exposure_risk = ac51_merged_df.groupby('scam_contact_mode').head(3).reset_index(drop=True)
        
        # Keep only rows that in 'Exposure Risk' column have value greater that 1
        top_3_exposure_risk = top_3_exposure_risk[top_3_exposure_risk['Exposure Risk'] > 1.0]

        # Select Required Columns
        ac51_selected = top_3_exposure_risk[['scam_contact_mode', 'category_level_2', 'Average_Loss_seniors', 'Exposure Risk']]

        ac51_selected = ac51_selected.copy()

        links_dict = {
            'Buying or selling': 'https://scamguard.live/product-and-service-scams',
            'Dating and romance': 'https://scamguard.live/romance-scams',
            'Investment scams': 'https://scamguard.live/investment-scams',
            'Jobs and employment': 'https://scamguard.live/job-scams'
        }
        
        # Create the 'link' column
        ac51_selected['link'] = ac51_selected['category_level_2'].map(links_dict)

        # Fill empty values in the 'link' column based on 'Scam_Contact_Mode'
        ac51_selected['link'] = ac51_selected['link'].fillna(ac51_selected['scam_contact_mode'].map(contact_mode_links))

        # Format 'Average_Loss_seniors' as currency
        ac51_selected['Average_Loss_seniors'] = ac51_selected['Average_Loss_seniors'].apply(lambda x: f"${x:,.2f}")
        
        # Create the 'text' describing the data
        # ac51_selected['text'] = ac51_selected.apply(
        #     lambda row: (
        #         f"Your risk of being exposed to {row['category_level_2']} scams is {row['Exposure Risk']} times higher than the national average when using {row['scam_contact_mode']}. "
        #         f"The average loss for seniors is expected to be {row['Average_Loss_seniors']}. "
        #         f"To learn more about this scam and how to protect yourself, please click on the link below:"
        #     ),
        #     axis=1
        # )

        # Rename Some columns
        ac51_selected = ac51_selected.rename(columns={
            'scam_contact_mode': 'Online Activity',
            'category_level_2': 'Scam Type',
            'Average_Loss_seniors': 'Average Loss for Seniors'
        })

        # Define the mapping dictionary for partial replacements
        scam_type_mapping = {
            'Attempts to gain your personal information': 'Personal Info Theft',
            'Buying or selling': 'Buy/Sell',
            'Dating and romance': 'Romance',
            'Investment scams': 'Investment',
            'Jobs and employment': 'Job'
        }

        # Replace the partial strings in 'Scam Type' column
        for key, value in scam_type_mapping.items():
            ac51_selected['Scam Type'] = ac51_selected['Scam Type'].str.replace(key, value, regex=False)

        # Convert DataFrame to JSON and return as a JsonResponse
        ac51_json_data = ac51_selected.to_json(orient='records', indent=4)

        return JsonResponse(json.loads(ac51_json_data), safe=False)

# Create the view for AC5.2
@csrf_exempt
def get_ac52_view(request):
    
    if request.method == 'POST':
        filtered_df = load_data()
        data = json.loads(request.body)
        selected_gender = data.get('gender')
        selected_location = data.get('location')
        selected_age_group = data.get('age_group')

        # Filter the data for the selected demographic group (e.g., '65 and over')
        filtered_data_seniors = filtered_df[
            (filtered_df['complainant_gender'] == selected_gender) &
            (filtered_df['address_state'] == selected_location) &
            (filtered_df['complainant_age'] == selected_age_group)
        ]
        # print(filtered_data_seniors)
        # print(filtered_df)

        # Filter the data for 'All Ages' (to compare against national average)
        filtered_data_national = filtered_df[
            (filtered_df['complainant_age'] == 'All Ages')
        ]
        # print(filtered_data_national['complainant_gender'])
        # print(filtered_data_national['address_state'].unique())

        # Group and aggregate for seniors
        ac52_grouped_seniors = filtered_data_seniors.groupby(
            ['complainant_age', 'complainant_gender', 'address_state', 'category_level_2']
        ).agg({
            'amount_lost': 'sum',
            'number_of_reports': 'sum',
            'group_count': 'sum'
        }).reset_index()

        # Group and aggregate for national (All Ages)
        ac52_grouped_national = filtered_data_national.groupby(
            ['complainant_age', 'complainant_gender', 'address_state', 'category_level_2']
        ).agg({
            'amount_lost': 'sum',
            'number_of_reports': 'sum',
            'group_count': 'sum'
        }).reset_index()

        # Calculate average reports and average loss for seniors
        ac52_grouped_seniors['average_reports'] = (ac52_grouped_seniors['number_of_reports'] / ac52_grouped_seniors['group_count']).round(0).astype(int)
        ac52_grouped_seniors['average_loss'] = (ac52_grouped_seniors['amount_lost'] / ac52_grouped_seniors['number_of_reports']).round(0).astype(int)

        # Calculate average reports and average loss for national (All Ages)
        ac52_grouped_national['average_reports'] = (ac52_grouped_national['number_of_reports'] / ac52_grouped_national['group_count']).round(0).astype(int)
        ac52_grouped_national['average_loss'] = (ac52_grouped_national['amount_lost'] / ac52_grouped_national['number_of_reports']).round(0).astype(int)
        # print(ac52_grouped_national['average_reports'])
        # print(ac52_grouped_national['average_loss'])

        # Merge senior and national dataframes together
        ac52_merged_df = ac52_grouped_seniors.merge(
            ac52_grouped_national, 
            on=['category_level_2'], 
            how='left', 
            suffixes=('_seniors', '_national')
        )

        # Calculate the 'Exposure Risk'
        ac52_merged_df['exposure_risk'] = (ac52_merged_df['average_reports_seniors'] / ac52_merged_df['average_reports_national']).round(1)
        # print(ac52_merged_df['average_reports_seniors'] )
        # print(ac52_merged_df['average_reports_national'])
        # print(ac52_merged_df['exposure_risk'])

        # Sort the dataframe by necessary columns
        ac52_merged_df = ac52_merged_df.sort_values(
            by=['complainant_age_seniors', 'complainant_gender_seniors', 'address_state_seniors', 'exposure_risk'], 
            ascending=[True, True, True, False]
        )

        # Keep the top 3 rows for each unique combination of age, gender, and state
        ac52_top_3_exposure_risk = ac52_merged_df.groupby(
            ['complainant_age_seniors', 'complainant_gender_seniors', 'address_state_seniors']
        ).head(3).reset_index(drop=True)

        # Keep only rows with 'Exposure Risk' greater than 1.0
        ac52_top_3_exposure_risk = ac52_top_3_exposure_risk[ac52_top_3_exposure_risk['exposure_risk'] > 1.0]

        # Select Required Columns
        ac52_selected = ac52_top_3_exposure_risk[['complainant_age_seniors', 'complainant_gender_seniors',
                                                'address_state_seniors', 'category_level_2', 'average_loss_seniors', 'exposure_risk']]

        ac52_selected = ac52_selected.copy()

        links_dict = {
            'Attempts to gain your personal information' : 'https://scamguard.live/email-scams',
            'Buying or selling': 'https://scamguard.live/product-and-service-scams',
            'Dating and romance': 'https://scamguard.live/romance-scams',
            'Investment scams': 'https://scamguard.live/investment-scams',
            'Jobs and employment': 'https://scamguard.live/job-scams'
        }
        
        # Create the 'link' column (assuming links_dict and contact_mode_links are defined elsewhere)
        ac52_selected['link'] = ac52_selected['category_level_2'].map(links_dict)

        # Format 'Average_Loss_seniors' as currency
        ac52_selected['average_loss_seniors'] = ac52_selected['average_loss_seniors'].apply(lambda x: f"${x:,.2f}")

        # # Reformat 'Category_Level_2' values
        # ac52_selected['category_level_2'] = ac52_selected.apply(
        #     lambda row: f"{row['category_level_2']} scams via {row['scam_contact_mode']}",
        #     axis=1
        # )

        # # Create the 'text' column
        # ac52_selected['text'] = ac52_selected.apply(
        #     lambda row: (
        #         f"According to your demographic profile, your risk of encountering {row['category_level_2']} is {row['exposure_risk']} times higher than the national average. "
        #         f"For individuals in your demographic group, the average financial loss for seniors is estimated to be {row['average_loss_seniors']}. "
        #         f"To learn more about this scam and discover ways to protect yourself, please click the link below:"
        #     ),
        #     axis=1
        # )

        # Rename some columns
        ac52_selected = ac52_selected.rename(columns={
            'category_level_2': 'Scam Type',
            'average_loss_seniors': 'Average Loss for Seniors',
            'complainant_age_seniors': 'Age Group',
            'address_state_seniors': 'State',
        })

        # Define the mapping dictionary for partial replacements
        scam_type_mapping = {
            'Attempts to gain your personal information': 'Personal Info Theft',
            'Buying or selling': 'Buy/Sell',
            'Dating and romance': 'Romance',
            'Investment scams': 'Investment',
            'Jobs and employment': 'Job'
        }

        # Replace the partial strings in 'Scam Type' column
        for key, value in scam_type_mapping.items():
            ac52_selected['Scam Type'] = ac52_selected['Scam Type'].str.replace(key, value, regex=False)

        # Convert the dataframe to JSON format
        ac52_json_data = ac52_selected.to_json(orient='records', indent=4)
        # print(ac52_json_data)

        # Return the JSON response
        return JsonResponse(json.loads(ac52_json_data), safe=False)
