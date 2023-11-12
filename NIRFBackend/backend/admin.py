
# Register your models here.

from django.contrib import admin

from .models import Institution, Parameter, Score, Subparameter, SubparameterScore, Faculty, ResearchOutput, StudentPlacement, TLR, SS, FSR, FQE, FRU, RP, PU, CMP, QP, IPR, GO, GUE, GPHD, OI, RD, WD, ESCS, PRRanking

# Register your models with the Django admin site
admin.site.register([ Parameter, Score, Subparameter, SubparameterScore, Faculty, ResearchOutput, StudentPlacement, TLR, SS, FSR, FQE, FRU, RP, PU, CMP, QP, IPR, GO, GUE, GPHD, OI, RD, WD, ESCS, PRRanking
])
admin.site.register(Institution) #User
