# Generated by Django 5.1 on 2024-08-23 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currentScams', '0004_scamcategory'),
    ]

    operations = [
        migrations.CreateModel(
            name='Complainant',
            fields=[
                ('complainant_age', models.CharField(max_length=100)),
                ('complainant_gender', models.CharField(max_length=100)),
                ('address_state', models.CharField(max_length=100)),
                ('complainant_id', models.AutoField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'complainant',
            },
        ),
    ]
