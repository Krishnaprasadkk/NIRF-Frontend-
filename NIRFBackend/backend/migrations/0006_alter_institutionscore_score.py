# Generated by Django 4.2.7 on 2023-12-04 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_institutionscore'),
    ]

    operations = [
        migrations.AlterField(
            model_name='institutionscore',
            name='Score',
            field=models.DecimalField(decimal_places=2, max_digits=20),
        ),
    ]
