# Generated by Django 4.2.7 on 2023-12-04 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_institutionscore_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='institutionscore',
            name='year',
            field=models.IntegerField(),
        ),
        migrations.AlterUniqueTogether(
            name='institutionscore',
            unique_together={('year', 'college')},
        ),
    ]
