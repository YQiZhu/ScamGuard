from django.db import models

# Create your models here.

class ScamReport(models.Model):
    start_of_month = models.CharField(max_length=100, db_column='StartOfMonth')  # StartOfMonth
    scam_contact_mode = models.CharField(max_length=100, db_column='Scam_Contact_Mode')  # Scam_Contact_Mode
    amount_lost = models.IntegerField(db_column='Amount_lost')  # Amount_lost
    number_of_reports = models.IntegerField(db_column='Number_of_reports')  # Number_of_reports
    average_report = models.IntegerField(db_column='Average_report')  # Average_report
    average_loss = models.IntegerField(db_column='Average_loss')  # Average_loss
    group_count = models.IntegerField(db_column='Group_Count')  # Group_Count
    category_id = models.IntegerField(db_column='Category_ID')  # Category_ID
    complainant_id = models.IntegerField(db_column='Complainant_ID')  # Complainant_ID
    report_id = models.AutoField(primary_key=True, db_column='Report_ID')  # Report_ID

    class Meta:
        db_table = 'scam_report'

class ScamCategory(models.Model):
    category_level_2 = models.CharField(max_length=100)
    category_level_3 = models.CharField(max_length=100)
    category_id = models.AutoField(primary_key=True) 

    class Meta:
        db_table = 'scam_category'

class Complainant(models.Model):
    complainant_age = models.CharField(max_length=100)
    complainant_gender = models.CharField(max_length=100)
    address_state = models.CharField(max_length=100)
    complainant_id = models.AutoField(primary_key=True) 
    
    class Meta:
        db_table = 'complainant'
