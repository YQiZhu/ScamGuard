from django.db import models

# Create your models here.

class ScamReport(models.Model):
    start_of_month = models.CharField(max_length=100)  # StartOfMonth
    amount_lost = models.DecimalField(max_digits=10, decimal_places=2)  # Amount_lost
    number_of_reports = models.IntegerField()  # Number_of_reports
    average_report = models.DecimalField(max_digits=10, decimal_places=2)  # Average_report
    average_loss = models.DecimalField(max_digits=10, decimal_places=2)  # Average_loss
    group_count = models.IntegerField()  # Group_Count
    category_id = models.IntegerField()  # Category_ID
    complainant_id = models.IntegerField()  # Complainant_ID
    report_id = models.AutoField(primary_key=True)  # Report_ID (AutoField will auto-increment)

    class Meta:
        db_table = 'scam_report'
