# Generated by Django 5.1 on 2024-08-23 02:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currentScams', '0002_alter_scamreport_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scamreport',
            name='start_of_month',
            field=models.CharField(max_length=100),
        ),
    ]