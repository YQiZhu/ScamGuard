#!/usr/bin/env python
# coding: utf-8

# # Preparation of the final datsets for each AC for Epic1.0 

# In[6]:


pip install psycopg2


# In[21]:


import pandas as pd
import psycopg2
import json


# This code opens the csv file for entitities created for the EDM Model
# 
# Chnages that needs to be made to the code: 
# 
# The code should be extracting the data from the postgreSQL
# The final tables need to be saved as a json format
# The code should pusch the created json files to the jango website?
# 
# 

# ## Openning and Merging the Entities

# In[29]:


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

# opening all required Entities
complainant_df = pd.read_csv('complainant.csv') 
scam_category_df = pd.read_csv('scam_category.csv')
scam_report_df = pd.read_csv('scam_report.csv')

# merging 3 databases together
merged_df = scam_report_df.merge(complainant_df, on='Complainant_ID', how='left')
whole_df = merged_df.merge(scam_category_df, on='Category_ID', how='left')

whole_df.info()


# ## AC1.1
# 
# In this section we will extract top 3 the most frequent scams for that last month reported by 65+ age group.

# In[30]:


ac11_df = whole_df

# Convert 'StartOfMonth' to datetime
ac11_df['StartOfMonth'] = pd.to_datetime(ac11_df['StartOfMonth'])

# Identify the latest month
latest_month = ac11_df['StartOfMonth'].max()

# Filter the DataFrame for rows with the latest month and 'Complainant_Age' of '65 and over'
ac11_filtered = ac11_df[(ac11_df['StartOfMonth'] == latest_month) & (ac11_df['Complainant_Age'] == '65 and over')]

ac11_filtered = ac11_filtered[ac11_filtered['Category_Level_3'] != 'Other scams']

# Group by 'Category_Level_3' and summarize the 'Number_of_reports' column
ac11_grouped = ac11_filtered.groupby(['StartOfMonth', 'Complainant_Age','Category_Level_3'])['Number_of_reports'].sum().reset_index()

# Sort the DataFrame by 'Number_of_reports' in descending order
ac11_sorted = ac11_grouped.sort_values(by='Number_of_reports', ascending=False)

# Select the top 3 rows
acc11_top3 = ac11_sorted.head(3).copy()

# Convert the DataFrame to a JSON 
acc11_json_data = acc11_top3.to_json(orient='records', date_format='iso')

# Parse the JSON string into a Python dictionary
acc11_json = json.loads(acc11_json_data)

acc11_json


# ## AC1.2
# 
# In this section we will extract top 3 the most frequent scam contact methods used on 65+ age group in recent month

# In[35]:


ac12_filtered = ac11_filtered

# Group the data by Contact Method
ac12_grouped = ac12_filtered.groupby(['StartOfMonth', 'Complainant_Age','Scam___Contact_Mode'])['Number_of_reports'].sum().reset_index()

# Sort by 'Number_of_reports' in descending order
ac12_sorted = ac12_grouped.sort_values(by='Number_of_reports', ascending=False)

# Select the top 3 rows
ac12_top_3 = ac12_sorted.head(3).copy()

# Convert the DataFrame to a JSON 
acc12_json_data = ac12_top_3.to_json(orient='records', date_format='iso')

# Parse the JSON string into a Python dictionary
acc12_json = json.loads(acc12_json_data)


# ## AC1.3
# 
# In this section we will extract top 3 scams that cuased the highest loss for 65+ age group in recent month

# In[39]:


ac13_filtered = ac11_filtered

# Group by the data and display the sum for amount lost
ac13_grouped = ac13_filtered.groupby(['StartOfMonth', 'Complainant_Age', 'Category_Level_3'])[['Amount_lost']].sum().reset_index()

# Sort the DataFrame by 'Amount_lost' in descending order
ac13_sorted = ac13_grouped.sort_values(by='Amount_lost', ascending=False)

# Select the top 3 rows
ac13_top_3 = ac13_sorted.head(3).copy()

# Convert the DataFrame to a JSON 
acc13_json_data = ac13_top_3.to_json(orient='records', date_format='iso')

# Parse the JSON string into a Python dictionary
acc13_json = json.loads(acc13_json_data)

