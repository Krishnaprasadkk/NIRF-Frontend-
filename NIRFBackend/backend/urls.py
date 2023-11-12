from django.urls import path, include
from rest_framework import routers

from .views import InstitutionViewSet,ParameterViewSet,ScoreViewSet,SubparameterViewSet,SubparameterScoreViewSet,FacultyViewSet, ResearchOutputViewSet, StudentPlacementViewSet, TLRViewSet, SSViewSet, FSRViewSet, FQEViewSet, FRUViewSet, RPViewSet, PUViewSet, CMPViewSet, QPViewSet, IPRViewSet, GOViewSet, GUEViewSet, GPHDViewSet, OIViewSet, RDViewSet, WDViewSet, ESCSViewSet, PRRankingViewSet,RegisterView,LoginView,UserView,LogoutView

router = routers.DefaultRouter()


router.register(r'institutions', InstitutionViewSet)
router.register(r'parameters', ParameterViewSet)
router.register(r'scores', ScoreViewSet)
router.register(r'subparameters', SubparameterViewSet)
router.register(r'subparameter_scores', SubparameterScoreViewSet)
router.register(r'faculties', FacultyViewSet)
router.register(r'research_outputs', ResearchOutputViewSet)
router.register(r'student_placements', StudentPlacementViewSet)
router.register(r'tlrs', TLRViewSet)
router.register(r'sses', SSViewSet)
router.register(r'fsrs', FSRViewSet)
router.register(r'fges', FQEViewSet)
router.register(r'frus', FRUViewSet)
router.register(r'rps', RPViewSet)
router.register(r'pus', PUViewSet)
router.register(r'cmps', CMPViewSet)
router.register(r'qps', QPViewSet)
router.register(r'iprs', IPRViewSet)
router.register(r'gos', GOViewSet)
router.register(r'gues', GUEViewSet)
router.register(r'gphds', GPHDViewSet)
router.register(r'ois', OIViewSet)
router.register(r'rds', RDViewSet)
router.register(r'wds', WDViewSet)
router.register(r'escss', ESCSViewSet)
router.register(r'prrankings', PRRankingViewSet)

from . import views
urlpatterns = [
    path('', include(router.urls)),
    path('register/',RegisterView.as_view()) ,
    path('login/',LoginView.as_view()),
    path('user/',UserView.as_view()),
    path('logout/',LogoutView.as_view()),
    path('calculate_tlr/<str:id>/',views.calculate_tlr_score,name="tlr-score")       
]