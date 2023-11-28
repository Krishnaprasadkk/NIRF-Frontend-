# Generated by Django 4.2.7 on 2023-11-20 11:09

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Institution',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('collegename', models.CharField(max_length=255, null=True)),
                ('email', models.EmailField(max_length=254, null=True, unique=True)),
                ('password', models.CharField(max_length=200, null=True)),
                ('type', models.CharField(blank=True, max_length=255, null=True)),
                ('location', models.CharField(blank=True, max_length=255, null=True)),
                ('username', models.CharField(blank=True, max_length=255, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Parameter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('name', models.CharField(max_length=255)),
                ('weight', models.DecimalField(decimal_places=2, max_digits=5)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college', 'name')},
            },
        ),
        migrations.CreateModel(
            name='Subparameter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('name', models.CharField(max_length=255)),
                ('weight', models.DecimalField(decimal_places=2, max_digits=5)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('parameter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.parameter')),
            ],
            options={
                'unique_together': {('year', 'college', 'name')},
            },
        ),
        migrations.CreateModel(
            name='TLR',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('quantity', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='StudentPlacement',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('degree', models.CharField(max_length=255)),
                ('company', models.CharField(max_length=255)),
                ('salary', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ResearchOutput',
            fields=[
                ('title', models.CharField(max_length=255)),
                ('authors', models.CharField(max_length=255)),
                ('journal', models.CharField(max_length=255)),
                ('year', models.IntegerField(primary_key=True, serialize=False)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('designation', models.CharField(max_length=255)),
                ('experience', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WD',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('womenStudents', models.IntegerField()),
                ('womenFaculty', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='SubparameterScore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('score', models.DecimalField(decimal_places=2, max_digits=5)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('parameter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.parameter')),
                ('subparameter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.subparameter')),
            ],
            options={
                'unique_together': {('year', 'college', 'subparameter')},
            },
        ),
        migrations.CreateModel(
            name='SS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('sanctionedApprovedIntake', models.IntegerField()),
                ('actualIntake', models.IntegerField()),
                ('totalphd', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('score', models.DecimalField(decimal_places=2, max_digits=5)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('parameter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.parameter')),
            ],
            options={
                'unique_together': {('year', 'college', 'parameter')},
            },
        ),
        migrations.CreateModel(
            name='RP',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('research_publications', models.IntegerField()),
                ('professional_practice', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='RD',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('studentsFromOthStates', models.IntegerField()),
                ('studentsFromOthCntry', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='QP',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('total_citation_Count', models.IntegerField()),
                ('top_25_percent', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='PU',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('research_fundings', models.IntegerField()),
                ('consultation_fundings', models.IntegerField()),
                ('edp_fundings', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='PRRanking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('ranking', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='OI',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('region_diversity', models.DecimalField(decimal_places=2, max_digits=5)),
                ('women_diversity', models.DecimalField(decimal_places=2, max_digits=5)),
                ('economically_and_socially_challenged_students', models.DecimalField(decimal_places=2, max_digits=5)),
                ('facilities_for_physically_challenged_students', models.DecimalField(decimal_places=2, max_digits=5)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='IPR',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('patents_granted', models.IntegerField()),
                ('patents_published', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='GUE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('students_passed', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='GPHD',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('students_graduated', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='GO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('placement_rate', models.DecimalField(decimal_places=2, max_digits=5)),
                ('higher_studies_rate', models.DecimalField(decimal_places=2, max_digits=5)),
                ('entrepreneurship_rate', models.DecimalField(decimal_places=2, max_digits=5)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='FSR',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('permanent_faculty', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='FRU',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('total_revenue', models.IntegerField()),
                ('total_expenditure', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='FQE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('faculty_with_phd', models.IntegerField()),
                ('faculty_experience_8years', models.IntegerField()),
                ('faculty_experience_8_15years', models.IntegerField()),
                ('faculty_experience_more_15_years', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='ESCS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('total_students', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
        migrations.CreateModel(
            name='CMP',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('np', models.IntegerField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('year', 'college')},
            },
        ),
    ]
