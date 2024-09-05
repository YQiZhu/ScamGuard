#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import psycopg2
import json


# In[2]:


# Code to open entities from sql database

# Connect to your PostgreSQL database

"""
conn = psycopg2.connect(
    dbname="your_database_name",
    user="your_username",
    password="your_password",
    host="your_host",
    port="your_port"  # Usually 5432
)

# Write your SQL query
query_complainant = "SELECT * FROM complainant"
query_scam_category = "SELECT * FROM scam_category"
query_scam_report = "SELECT * FROM scam_report"

# Use pandas to execute the query and load it into a DataFrame
complainant_df = pd.read_sql_query(query_complainant, conn) 
scam_category_df = pd.read_sql_query(query_scam_category, conn)
scam_report_df = pd.read_sql_query(query_scam_report, conn)

# Close the connection
conn.close()

"""

# opening all required Entities from local folder
complainant_df = pd.read_csv('complainant.csv') 
scam_category_df = pd.read_csv('scam_category.csv')
scam_report_df = pd.read_csv('scam_report.csv')

# merging 3 databases together
merged_df = scam_report_df.merge(complainant_df, on='Complainant_ID', how='left')
whole_df = merged_df.merge(scam_category_df, on='Category_ID', how='left')


# In[3]:


# List of categories to filter
categories = [
    'Attempts to gain your personal information',
    'Buying or selling',
    'Dating and romance',
    'Investment scams',
    'Jobs and employment'
]

# List of contact modes to filter
contact_modes = [
    'Email',
    'Fax',
    'Internet',
    'Mail',
    'Mobile apps',
    'Phone call',
    'Social media/Online forums',
    'Text message'
]

# Filter rows where 'Category_Level_2' contains any of the values in the list
filtered_df = whole_df[whole_df['Category_Level_2'].isin(categories)]

# Exclude rows where 'Category_Level_2' or 'Category_Level_3' contains the word 'other'
filtered_df = filtered_df[~filtered_df['Category_Level_2'].str.contains('other', case=False)]
filtered_df = filtered_df[~filtered_df['Category_Level_3'].str.contains('other', case=False)]

# Filter rows where 'Scam___Contact_Mode' contains any of the specified contact modes
filtered_df = filtered_df[filtered_df['Scam___Contact_Mode'].isin(contact_modes)]

# Convert 'StartOfMonth' to datetime
filtered_df['StartOfMonth'] = pd.to_datetime(filtered_df['StartOfMonth'])

# Get the most recent year from the 'StartOfMonth' column
latest_year = filtered_df['StartOfMonth'].dt.year.max()

# Keep only the rows with the latest year in 'StartOfMonth'
filtered_df = filtered_df[filtered_df['StartOfMonth'].dt.year == latest_year]


# # AC5.1

# In[4]:


# Group the data by the specified columns and calculate the summary for the other columns
ac51_grouped = filtered_df.groupby(['Scam___Contact_Mode', 'Complainant_Age', 'Category_Level_2']).agg({
    'Amount_lost': 'sum',
    'Number_of_reports': 'sum',
    'Group_Count': 'sum'
}).reset_index()

# Create the Average_Reports and Average_Loss columns
ac51_grouped['Average_Reports'] = (ac51_grouped['Number_of_reports'] / ac51_grouped['Group_Count']).round(0).astype(int)
ac51_grouped['Average_Loss'] = (ac51_grouped['Amount_lost'] / ac51_grouped['Number_of_reports']).round(0).astype(int)


# Drop some non needed columns
ac51_grouped = ac51_grouped.drop(columns=['Amount_lost', 'Number_of_reports', 'Group_Count'])

# Create the dataframe for seniors only
ac51_seniors = ac51_grouped[ac51_grouped['Complainant_Age'] == '65 and over']

# Create the data frame for all ages
ac51_national = ac51_grouped[ac51_grouped['Complainant_Age'] == 'All Ages']

# merge senior dataframe with national dataframe
ac51_merged_df = ac51_seniors.merge(ac51_national, on=['Scam___Contact_Mode', 'Category_Level_2'], how='left', suffixes=('_seniors', '_national'))

# Create the 'Exposure Risk' column
ac51_merged_df['Exposure Risk'] = ((ac51_merged_df['Average_Reports_seniors'] / ac51_merged_df['Average_Reports_national'])).round(1)

# Sort the dataframe by 'Scam___Contact_Mode' and 'Exposure Risk' in descending order
ac51_merged_df = ac51_merged_df.sort_values(by=['Scam___Contact_Mode', 'Exposure Risk'], ascending=[True, False])

# Keep the top 3 rows for each unique value in 'Scam___Contact_Mode'
top_3_exposure_risk = ac51_merged_df.groupby('Scam___Contact_Mode').head(3).reset_index(drop=True)

# Keep only rows that in 'Exposure Risk' column have value greater that 1
top_3_exposure_risk = top_3_exposure_risk[top_3_exposure_risk['Exposure Risk'] > 1.0]

# Select Required Columns
ac51_selected = top_3_exposure_risk[['Scam___Contact_Mode', 'Category_Level_2', 'Average_Loss_seniors', 'Exposure Risk']]


ac51_selected = ac51_selected.copy()

# Create the dictionary for links based on 'Category_Level_2'
links_dict = {

    'Buying or selling': 'https://scamguard.live/product-and-service-scams',
    'Dating and romance': 'https://scamguard.live/romance-scams',
    'Investment scams': 'https://scamguard.live/investment-scams',
    'Jobs and employment': 'https://scamguard.live/job-scams'
}

# Create the 'link' column
ac51_selected['link'] = ac51_selected['Category_Level_2'].map(links_dict)

# Crate the dictionary for links based on 'Scam___Contact_Mode'
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

# Fill empty values in the 'link' column based on 'Scam___Contact_Mode'
ac51_selected['link'] = ac51_selected['link'].fillna(ac51_selected['Scam___Contact_Mode'].map(contact_mode_links))

# Format 'Average_Loss_seniors' as currency
ac51_selected['Average_Loss_seniors'] = ac51_selected['Average_Loss_seniors'].apply(lambda x: f"${x:,.2f}")

# Create the 'text' describing the data
ac51_selected['text'] = ac51_selected.apply(
    lambda row: (
        f"Your risk of being exposed to {row['Category_Level_2']} scams is {row['Exposure Risk']} times higher than the national average when using {row['Scam___Contact_Mode']}. "
        f"The average loss for seniors is expected to be ${row['Average_Loss_seniors']}. "
        f"To learn more about this scam and how to protect yourself, please click on the link below:"
    ),
    axis=1
)


# Rename Some columns
ac51_selected = ac51_selected.rename(columns={
    'Scam___Contact_Mode': 'Online Activity',
    'Category_Level_2': 'Scam Type',
    'Average_Loss_seniors': 'Average Loss for Seniors'
})


# Convert the dataframe to JSON format
ac51_json_data = ac51_selected.to_json(orient='records', indent=4)


# # AC5.2

# In[5]:


# Group the data by the specified columns and calculate the summary for the other columns
ac52_grouped = filtered_df.groupby(['Scam___Contact_Mode', 'Complainant_Age', 'Complainant_Gender', 'Address_State', 'Category_Level_2']).agg({
    'Amount_lost': 'sum',
    'Number_of_reports': 'sum',
    'Group_Count': 'sum'
}).reset_index()

# Create the Average_Reports and Average_Loss columns
ac52_grouped['Average_Reports'] = (ac52_grouped['Number_of_reports'] / ac52_grouped['Group_Count']).round(0).astype(int)
ac52_grouped['Average_Loss'] = (ac52_grouped['Amount_lost'] / ac52_grouped['Number_of_reports']).round(0).astype(int)

# Drop some non needed columns
ac52_grouped = ac52_grouped.drop(columns=['Amount_lost', 'Number_of_reports', 'Group_Count'])

# Create the dataframe for Seniors
ac52_seniors = ac52_grouped[ac52_grouped['Complainant_Age'] == '65 and over']

# Create the dataframe for national data
ac52_national = ac52_grouped[ac52_grouped['Complainant_Age'] == 'All Ages']

# merge senior and national dataframes together
ac52_merged_df = ac52_seniors.merge(ac52_national, on=['Scam___Contact_Mode', 'Category_Level_2'], how='left', suffixes=('_seniors', '_national'))

# Create the 'Exposure Risk' column
ac52_merged_df['Exposure Risk'] = ((ac52_merged_df['Average_Reports_seniors'] / ac52_merged_df['Average_Reports_national'])).round(1)

# Sort the dataframe by 'Complainant_Age_seniors', 'Complainant_Gender_seniors', 'Address_State_seniors', and 'Exposure Risk' in descending order for 'Exposure Risk'
ac52_merged_df = ac52_merged_df.sort_values(by=['Complainant_Age_seniors', 'Complainant_Gender_seniors', 'Address_State_seniors', 'Exposure Risk'], ascending=[True, True, True, False])

# Keep the top 3 rows for each unique combination of 'Complainant_Age_seniors', 'Complainant_Gender_seniors', and 'Address_State_seniors'
ac52_top_3_exposure_risk = ac52_merged_df.groupby(['Complainant_Age_seniors', 'Complainant_Gender_seniors', 'Address_State_seniors']).head(3).reset_index(drop=True)

# Keep only rows that in column 'Exposure Risk' Contain Values more than 1.0
ac52_top_3_exposure_risk = ac52_top_3_exposure_risk[ac52_top_3_exposure_risk['Exposure Risk'] > 1.0]

# Select Required Columns
ac52_selected = ac52_top_3_exposure_risk[['Scam___Contact_Mode', 'Complainant_Age_seniors', 'Complainant_Gender_seniors',
                                          'Address_State_seniors',
                                          'Category_Level_2', 'Average_Loss_seniors', 'Exposure Risk']]


ac52_selected = ac52_selected.copy()

# Create the 'link' column
ac52_selected['link'] = ac52_selected['Category_Level_2'].map(links_dict)

# Fill empty values in the 'link' column based on 'Scam___Contact_Mode'
ac52_selected['link'] = ac52_selected['link'].fillna(ac52_selected['Scam___Contact_Mode'].map(contact_mode_links))

# Format 'Average_Loss_seniors' as currency
ac52_selected['Average_Loss_seniors'] = ac52_selected['Average_Loss_seniors'].apply(lambda x: f"${x:,.2f}")


# Reformat 'Category_Level_2' values
ac52_selected['Category_Level_2'] = ac52_selected.apply(
    lambda row: f"{row['Category_Level_2']} scams via {row['Scam___Contact_Mode']}",
    axis=1
)


# Create the 'text' column
ac52_selected['text'] = ac52_selected.apply(
    lambda row: (
        f"According to your demographic profile, your risk of encountering {row['Category_Level_2']} is {row['Exposure Risk']} times higher than the national average. "
        f"For individuals in your demographic group, the average financial loss for seniors is estimated to be {row['Average_Loss_seniors']}. "
        f"To learn more about this scam and discover ways to protect yourself, please click the link below:"
    ),
    axis=1
)


# Rename the some columns
ac52_selected = ac52_selected.rename(columns={
    'Scam___Contact_Mode': 'Online Activity',
    'Category_Level_2': 'Scam Type',
    'Average_Loss_seniors': 'Average Loss for Seniors',
    'Complainant_Age_seniors': 'Age Group',
    'Address_State_seniors': 'State',
    
})

# Convert the dataframe to JSON format
ac52_json_data = ac52_selected.to_json(orient='records', indent=4)

