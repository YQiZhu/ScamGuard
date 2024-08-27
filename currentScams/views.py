from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.http import JsonResponse
import requests
from django.conf import settings
from rest_framework import viewsets
from .models import ScamReport, ScamCategory, Complainant
import pandas as pd
import json

# Step 1: Query the data from PostgreSQL using Django ORM
def load_data():
    scam_reports = ScamReport.objects.all().values()
    scam_categories = ScamCategory.objects.all().values()
    complainants = Complainant.objects.all().values()

    # Step 2: Convert Django QuerySets to Pandas DataFrames
    scam_report_df = pd.DataFrame(list(scam_reports))
    scam_category_df = pd.DataFrame(list(scam_categories))
    complainant_df = pd.DataFrame(list(complainants))

    # Step 3: Merge the DataFrames
    merged_df = scam_report_df.merge(complainant_df, on='complainant_id', how='left')
    whole_df = merged_df.merge(scam_category_df, on='category_id', how='left')

    return whole_df

whole_df = load_data()

@require_GET
def get_most_frequent_scams(request):
    ac11_df = whole_df

    # Convert 'start_of_month' to datetime
    ac11_df['start_of_month'] = pd.to_datetime(ac11_df['start_of_month'])

    # Identify the latest month
    latest_month = ac11_df['start_of_month'].max()

    # Filter the DataFrame for rows with the latest month and 'complainant_age' of '65 and over'
    ac11_filtered = ac11_df[(ac11_df['start_of_month'] == latest_month) & (ac11_df['complainant_age'] == '65 and over')]

    ac11_filtered = ac11_filtered[ac11_filtered['category_level_3'] != 'Other scams']

    # Group by 'category_level_3' and summarize the 'number_of_reports' column
    ac11_grouped = ac11_filtered.groupby(['start_of_month', 'complainant_age', 'category_level_3'])['number_of_reports'].sum().reset_index()

    # Sort the DataFrame by 'number_of_reports' in descending order
    ac11_sorted = ac11_grouped.sort_values(by='number_of_reports', ascending=False)

    # Select the top 3 rows
    acc11_top3 = ac11_sorted.head(3).copy()

    # Convert the DataFrame to a JSON 
    acc11_json_data = acc11_top3.to_json(orient='records', date_format='iso')

    # Parse the JSON string into a Python dictionary
    acc11_json = json.loads(acc11_json_data)

    return JsonResponse(acc11_json)


@require_GET
def get_scams_highest_loss(request):
    ac12_filtered = ac11_filtered

    # Group by the data and display the sum for 'amount_lost'
    ac12_grouped = ac12_filtered.groupby(['start_of_month', 'complainant_age', 'category_level_3'])[['amount_lost']].sum().reset_index()

    # Sort the DataFrame by 'amount_lost' in descending order
    ac12_sorted = ac12_grouped.sort_values(by='amount_lost', ascending=False)

    # Select the top 3 rows
    ac12_top_3 = ac12_sorted.head(3).copy()

    # Convert the DataFrame to a JSON 
    acc12_json_data = ac12_top_3.to_json(orient='records', date_format='iso')

    # Parse the JSON string into a Python dictionary
    acc12_json = json.loads(acc12_json_data)

    return JsonResponse(acc12_json)


@require_GET
def get_most_scams_contact_methods(request):
    ac13_filtered = ac11_filtered

    # Group the data by 'scam_contact_mode'
    ac13_grouped = ac13_filtered.groupby(['start_of_month', 'complainant_age', 'scam_contact_mode'])['number_of_reports'].sum().reset_index()

    # Sort by 'number_of_reports' in descending order
    ac13_sorted = ac13_grouped.sort_values(by='number_of_reports', ascending=False)

    # Select the top 3 rows
    ac13_top_3 = ac13_sorted.head(3).copy()

    # Convert the DataFrame to a JSON 
    acc13_json_data = ac13_top_3.to_json(orient='records', date_format='iso')

    # Parse the JSON string into a Python dictionary
    acc13_json = json.loads(acc13_json_data)

    return JsonResponse(acc13_json)