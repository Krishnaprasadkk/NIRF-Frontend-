from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractUser

class Institution(AbstractUser):
    """Stores information about institutions."""

    id = models.AutoField(primary_key=True)
    collegename = models.CharField(max_length=255,null=True)
    email= models.EmailField(unique=True,null=True)
    password=models.CharField(max_length=200,null=True)
    type = models.CharField(max_length=255,null=True,blank=True)
    location = models.CharField(max_length=255,null=True,blank=True)
    username=models.CharField(max_length=255,null=True,blank=True)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']
    
    def __str__(self):
        return str(self.collegename)
    

class Parameter(models.Model):
    """Stores informationx about parameters."""
    class Meta:
        unique_together=(('year','name'),)

    year=models.IntegerField()
    name = models.CharField(max_length=255)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
           
class Score(models.Model):
    """Stores information about scores."""
    #to create composite key
    class Meta:
        unique_together=(('year','parameter'),)
    year=models.IntegerField()
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    parameter = models.ForeignKey(Parameter, on_delete=models.CASCADE)
    score = models.DecimalField(max_digits=5, decimal_places=2)
        

class Subparameter(models.Model):
    """Stores information about subparameters."""
    class Meta:
        unique_together=(('year','name'),)

    year=models.IntegerField()
    parameter = models.ForeignKey(Parameter, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class SubparameterScore(models.Model):
    """Stores information about subparameter scores."""
    class Meta:
        unique_together=(('year','subparameter'),)
    year=models.IntegerField()
    subparameter = models.ForeignKey(Subparameter, on_delete=models.CASCADE)
    score = models.DecimalField(max_digits=5, decimal_places=2)
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    parameter = models.ForeignKey(Parameter,on_delete=models.CASCADE)
    
    def __str__(self):
        return str({str(self.subparameter):float(self.score)})
    

# Tables to calculate NIRF score

class Faculty(models.Model):
    """Stores information about faculty members."""

    id = models.AutoField(primary_key=True)
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    experience = models.IntegerField()

class ResearchOutput(models.Model):
    """Stores information about research output."""

    
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    authors = models.CharField(max_length=255)
    journal = models.CharField(max_length=255)
    year = models.IntegerField(primary_key=True)

class StudentPlacement(models.Model):
    """Stores information about student placements."""

    id = models.AutoField(primary_key=True)
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    salary = models.IntegerField()
##-------------------------------------------------------------------------

## parameter 1

class TLR(models.Model):
    """Stores information about Teaching, Learning & Resources."""

    id = models.AutoField(primary_key=True)
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    quantity = models.IntegerField()

class SS(models.Model):
    """Stores information about Student Strength including Doctoral Students."""
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    sanctionedApprovedIntake = models.IntegerField()
    actualIntake = models.IntegerField()
    totalphd= models.IntegerField()

    

class FSR(models.Model):
    """Stores information about Faculty-student ratio with emphasis on permanent faculty."""

    #id = models.AutoField(primary_key=True)
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    permanent_faculty = models.IntegerField()
    #temporary_faculty = models.IntegerField()
    #students = models.IntegerField()

class FQE(models.Model):
    """Stores information about Combined metric for Faculty with PhD (or equivalent) and Experience."""


    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    faculty_with_phd = models.IntegerField()
    #need to be removed 
    
    faculty_experience_8years = models.IntegerField()
    faculty_experience_8_15years = models.IntegerField()
    faculty_experience_more_15_years = models.IntegerField()
    #total_faculty = models.IntegerField()

class FRU(models.Model):
    """Stores information about Financial Resources and their Utilisation."""

    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    #capital expendatyre
    total_revenue = models.IntegerField()
    #operational exp
    total_expenditure = models.IntegerField()
    #utilization_ratio = models.DecimalField(max_digits=5, decimal_places=2)



#parameter-2

class RP(models.Model):
    """Stores information about Research and Professional Practice."""
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    research_publications = models.IntegerField()
    professional_practice = models.IntegerField()

class PU(models.Model):
    """Stores information about Combined metric for Publications."""
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    research_fundings:models.IntegerField()
    consultation_fundings:models.IntegerField()
    edp_fundings:models.IntegerField()

class CMP(models.Model):
    """Stores information about metric for Publications."""

    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    np=models.IntegerField()

class QP(models.Model):
    """Stores information about Combined metric for Quality of Publications."""
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    total_citation_Count:models.IntegerField()
    top_25_percent:models.IntegerField()

class IPR(models.Model):
    """Stores information about IPR and Patents: Published and Granted."""

    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    patents_granted: models.IntegerField()
    patents_published: models.IntegerField()



##parametr 3

class GO(models.Model):
    """Stores information about Graduation Outcomes."""
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    placement_rate = models.DecimalField(max_digits=5, decimal_places=2)
    higher_studies_rate = models.DecimalField(max_digits=5, decimal_places=2)
    entrepreneurship_rate = models.DecimalField(max_digits=5, decimal_places=2)

class GUE(models.Model):
    """Stores information about Metric for University Examinations."""

    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    students_passed=models.IntegerField()
    
    

class GPHD(models.Model):
    """Stores information about Metric for Number of Ph.D. Students Graduated."""
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    students_graduated = models.IntegerField()


## parameter 4
class OI(models.Model):
    """Stores information about Outreach and Inclusivity."""

    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    region_diversity = models.DecimalField(max_digits=5, decimal_places=2)
    women_diversity = models.DecimalField(max_digits=5, decimal_places=2)
    economically_and_socially_challenged_students = models.DecimalField(max_digits=5, decimal_places=2)
    facilities_for_physically_challenged_students = models.DecimalField(max_digits=5, decimal_places=2)

class RD(models.Model):
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    studentsFromOthStates:models.IntegerField() 
    studentsFromOthCntry:models.IntegerField()


class WD(models.Model):
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    womenStudents:models.IntegerField()
    womenFaculty: models.IntegerField()

class ESCS(models.Model):
    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    total_students=models.IntegerField()


# parameter 5
class PRRanking(models.Model):
    """Stores information about Perception (PR) Ranking."""

    college = models.ForeignKey(Institution, on_delete=models.CASCADE)
    year = models.IntegerField(primary_key=True)
    ranking = models.IntegerField()


