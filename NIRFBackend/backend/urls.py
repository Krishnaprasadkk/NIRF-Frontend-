from django.urls import path, include
from rest_framework import routers

from .views import InstitutionViewSet,ParameterViewSet,ScoreViewSet,SubparameterViewSet,SubparameterScoreViewSet,FacultyViewSet, ResearchOutputViewSet, StudentPlacementViewSet, TLRViewSet, SSViewSet, FSRViewSet, FQEViewSet, FRUViewSet, RPViewSet, PUViewSet, CMPViewSet, QPViewSet, IPRViewSet, GOViewSet, GUEViewSet, GPHDViewSet, OIViewSet, RDViewSet, WDViewSet, ESCSViewSet, PRRankingViewSet,RegisterView,LoginView,UserView,LogoutView,ssgetview
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
    path('calculate_tlr/<str:id>/',views.calculate_tlr_score,name="tlr-score"),
    path('calculate_rpp/<str:id>/',views.calculate_ResearchANDProffesional,name="rpp-score"),
    path('calculate_go/<str:id>/',views.calculate_GraduationOutcomes,name="go-score"),
    path('calculate_oi/<str:id>/',views.calculate_OutreachAndInclusive,name="oi-score"),
    path('calculate_score/<str:id>/',views.calculateOverallScore,name="overall-score"),
    path('ssget/<str:id>/',views.ssgetview,name="ssget"),
     path('fsrget/<str:id>/',views.fsrgetview,name="fsrget"),
      path('fqeget/<str:id>/',views.fqegetview,name="fqeget"),
       path('fruget/<str:id>/',views.frugetview,name="fruget"),
        path('puget/<str:id>/',views.pugetview,name="puget"),
         path('cmpget/<str:id>/',views.cmpgetview,name="cmpget"),
          path('qpget/<str:id>/',views.qpgetview,name="qpget"),
           path('iprget/<str:id>/',views.iprgetview,name="iprget"),
            path('gueget/<str:id>/',views.guegetview,name="gueget"),
             path('gphdget/<str:id>/',views.gphdgetview,name="gphdget"),
              path('wdget/<str:id>/',views.wdgetview,name="wdget"),
               path('rdget/<str:id>/',views.rdgetview,name="rdget"),
                path('wdget/<str:id>/',views.wdgetview,name="wdget"),
                 path('escsget/<str:id>/',views.escsgetview,name="escsget"),

]   