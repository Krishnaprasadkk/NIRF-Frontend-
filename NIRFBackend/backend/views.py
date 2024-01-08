from rest_framework import viewsets
from rest_framework.response import Response
from .models import Institution,Parameter, Subparameter, Faculty,Score,SubparameterScore,ResearchOutput, StudentPlacement, TLR, SS, FSR, FQE, FRU, RP, PU, CMP, QP, IPR, GO, GUE, GPHD, OI, RD, WD, ESCS, PRRanking,InstitutionScore
from .serializers import *


class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer

    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class InstitutionScoreViewSet(viewsets.ModelViewSet):
    queryset = InstitutionScore.objects.all()
    serializer_class = InstitutionScoreSerializer

    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})

class ParameterViewSet(viewsets.ModelViewSet):
    queryset = Parameter.objects.all()
    serializer_class = ParameterSerializer

    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})


class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer

    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})

class SubparameterViewSet(viewsets.ModelViewSet):
    queryset = Subparameter.objects.all()
    serializer_class = SubparameterSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})


class SubparameterScoreViewSet(viewsets.ModelViewSet):
    queryset = SubparameterScore.objects.all()
    serializer_class = SubparameterScoreSerializer

    
class FacultyViewSet(viewsets.ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class ResearchOutputViewSet(viewsets.ModelViewSet):
    queryset = ResearchOutput.objects.all()
    serializer_class = ResearchOutputSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class StudentPlacementViewSet(viewsets.ModelViewSet):
    queryset = StudentPlacement.objects.all()
    serializer_class = StudentPlacementSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class TLRViewSet(viewsets.ModelViewSet):
    queryset = TLR.objects.all()
    serializer_class = TLRSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class SSViewSet(viewsets.ModelViewSet):
    queryset = SS.objects.all()
    serializer_class = SSSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        print("he00000000000000")
        object = self.get_object()
        

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class FSRViewSet(viewsets.ModelViewSet):
    queryset = FSR.objects.all()
    serializer_class = FSRSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        print("he00000000000000")
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class FQEViewSet(viewsets.ModelViewSet):
    queryset = FQE.objects.all()
    serializer_class = FQESerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        print("asfnowefheolsdfhaw8ofhiek")
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class FRUViewSet(viewsets.ModelViewSet):
    queryset = FRU.objects.all()
    serializer_class = FRUSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class RPViewSet(viewsets.ModelViewSet):
    queryset = RP.objects.all()
    serializer_class = RPSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class PUViewSet(viewsets.ModelViewSet):
    queryset = PU.objects.all()
    serializer_class = PUSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class CMPViewSet(viewsets.ModelViewSet):
    print("hello dhiraj")
    queryset = CMP.objects.all()
    serializer_class = CMPSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class QPViewSet(viewsets.ModelViewSet):
    queryset = QP.objects.all()
    serializer_class = QPSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class IPRViewSet(viewsets.ModelViewSet):
    queryset = IPR.objects.all()
    serializer_class = IPRSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class GOViewSet(viewsets.ModelViewSet):
    queryset = GO.objects.all()
    serializer_class = GOSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class GUEViewSet(viewsets.ModelViewSet):
    queryset = GUE.objects.all()
    serializer_class = GUESerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class GPHDViewSet(viewsets.ModelViewSet):
    queryset = GPHD.objects.all()
    serializer_class = GPHDSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    

class OIViewSet(viewsets.ModelViewSet):
    queryset = OI.objects.all()
    serializer_class = OISerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class RDViewSet(viewsets.ModelViewSet):
    queryset = RD.objects.all()
    serializer_class = RDSSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class WDViewSet(viewsets.ModelViewSet):
    queryset = WD.objects.all()
    serializer_class = WDSSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class ESCSViewSet(viewsets.ModelViewSet):
    queryset = ESCS.objects.all()
    serializer_class = ESCSSSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
class PRRankingViewSet(viewsets.ModelViewSet):
    queryset = PRRanking.objects.all()
    serializer_class = PRRankingSerializer
    def update(self, request, *args, **kwargs):
        # Get the object to update.
        object = self.get_object()

        # Update the object with the data in the request body.
        serializer = self.get_serializer(object, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'success': True})
    
#login and register 
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
import jwt,datetime
class RegisterView(APIView):
    def post(self,request):
            collegename=request.data.get('collegename')
            password1=request.data.get('password')
            password2=request.data.get('confirm_pass')
            email=request.data.get('email')
            print(collegename)
            if Institution.objects.filter(collegename=collegename).exists():
                return Response("College name exist")
            elif Institution.objects.filter(email=email).exists():
                return Response("Email taken")
            elif password1!=password2:
                return Response("password doesnt match")
            
            serializer = InstitutionSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
    
from .models import Institution

class LoginView(APIView):
    def post(self,request):
        email = request.data['email']
        password=request.data['password']

        user = Institution.objects.filter(email=email).first()

        if user is None:
            raise Response(AuthenticationFailed("Cannot Login As user Dont exist "))
        
        if not user.check_password(password):
            return Response(AuthenticationFailed("Cannot Login As password is wrong  "))
        
        
        
        payload = {
            'id':user.id,
            'exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=60) ,#we will keep this token for one hour 
            'iat':datetime.datetime.utcnow() # data at which this token is created    
        }

        token = jwt.encode(payload,'secret',algorithm='HS256')
        
        response=Response()

        response.set_cookie(key='jwt',value=token,httponly=True)
        response.data = {
            'jwt':token
        }
       
        return response
    
#let get this token to get the authenticated user
class UserView(APIView):
    def get(self,request):
        token = request.COOKIES.get('jwt')
        
        if not token:
            return AuthenticationFailed('Unauthenticated')
        
        try:
            payload=jwt.decode(token,'secret',algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated')

        user = Institution.objects.filter(id=payload['id']).first() 

        serializer = InstitutionSerializer(user)      
        return Response(serializer.data)

# removing the user
class LogoutView(APIView):
    def post(self,request):
        response = Response()
        response.delete_cookie('jwt')
        response.data={
            'message':'success'
        }
        
        return response


from rest_framework.decorators import api_view


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import TLR, SS, FSR, FQE, FRU, RP, PU, CMP, QP, IPR, GO, GUE, GPHD

#calculate tlr score..!
from django.http import HttpResponse
@csrf_exempt
def calculate_tlr_score(request,id):
      """Calculates the entire score"""
        
      college = Institution.objects.get(id=id)
        #create parameter instance 
        #let's check if it's already exists;
        #i need year
      year=2023
      weightTlr=30
      parameter=Parameter.objects.filter(college=college,year=year,name='TLR').first()
      if parameter is None:
            #create instance
            parameter=Parameter.objects.create(college=college,year=year,name="TLR",weight=weightTlr)
        
            #parameter1
      ss=Subparameter.objects.filter(year=year,college=college,name="SS",parameter=parameter).first()
      if ss is None: 
          ss=Subparameter.objects.create(year=year,college=college,name="SS",parameter=parameter,weight=20)
          
      ssmodel=SS.objects.get(year=year,college=college)
      ssscore=(ssmodel.sanctionedApprovedIntake/ssmodel.actualIntake)*15+ssmodel.totalphd*5
      print("ssscore="+str(ssscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=ss).first()
      if subparameterscore is None:
        SubparameterScore.objects.create(year=year,subparameter=ss,college=college,parameter=parameter,score=ssscore)
        print("yes created subparameter for ss")
      print(subparameterscore)
     #--------fsr---------
      fsr=Subparameter.objects.filter(year=year,college=college,name="FSR",parameter=parameter).first()
      if fsr is None:
          fsr=Subparameter.objects.create(year=year,college=college,name="FSR",parameter=parameter,weight=30)
          
      fsrmodel=FSR.objects.get(year=year,college=college)
      fsrscore=30*(15*(fsrmodel.permanent_faculty/ssmodel.actualIntake))
      print("fsrscore="+str(fsrscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=fsr).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=fsr,college=college,parameter=parameter,score=fsrscore)
        print("yes created subparameter for fsr")
      print(subparameterscore)

     #----------fqe---------
      fqe=Subparameter.objects.filter(year=year,college=college,name="FQE",parameter=parameter).first()
      if fqe is None:
          fqe=Subparameter.objects.create(year=year,college=college,name="FQE",parameter=parameter,weight=20)
          
      fqemodel=FQE.objects.get(year=year,college=college)
      #percentage of faculty with phd.
      fra=fqemodel.faculty_with_phd/fsrmodel.permanent_faculty
      if fra<0.95:#fra is less than 95 percentage..
          fq=10*(fra/95)
      else:
          fq=10 #fra is >= 95%
      #fractions
      f1=fqemodel.faculty_experience_8years/fsrmodel.permanent_faculty
      f2=fqemodel.faculty_experience_8_15years/fsrmodel.permanent_faculty
      f3=fqemodel.faculty_experience_more_15_years/fsrmodel.permanent_faculty
      fe = 3*min(3*f1, 1) + 3*min(3*f2, 1) + 4*min(3*f3, 1)
      fqescore=fq+fe#formula need to be put.
      print("fqescore="+str(fqescore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=fqe).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=fqe,college=college,parameter=parameter,score=fqescore)
        print("yes created subparameter for fqe")

      print(subparameterscore)
#----------fru---------
      fru=Subparameter.objects.filter(year=year,college=college,name="FRU",parameter=parameter).first()
      if fru is None:
          fru=Subparameter.objects.create(year=year,college=college,name="FRU",parameter=parameter,weight=20)
          
      frumodel=FRU.objects.get(year=year,college=college)
      #FRU = 7.5×f(BC) + 22.5×f(BO)
      fruscore=60.23#formula need to be put.
      print("fruscore="+str(fruscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=fru).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=fru,college=college,parameter=parameter,score=fruscore)
        print("yes created subparameter for fru")
      

      #TLR Parameter score:
      tlrsubparameterscores=SubparameterScore.objects.filter(year=year,college=college,parameter=parameter)
      tlrscore=0
      for subparameterscore in tlrsubparameterscores:
           tlrscore+=subparameterscore.score

      scoretable=Score.objects.filter(year=year,college=college,parameter=parameter).first()
      if scoretable is None:
          scoreinstance=Score.objects.create(year=year,college=college,parameter=parameter,score=tlrscore)
          print("Score table is created")
         
      print(scoretable)
      return HttpResponse("success:TLR Score="+str(tlrscore))

    

  
     # Get the TLR model instance for the college.
     # Return the TLR score as a JSON response.
      #return HttpResponse(str(college)+str(parameter))  
 
#this view is function based view which is used to calculate the RP parameter of the score ..
@csrf_exempt
def calculate_ResearchANDProffesional(request,id):
            
      college = Institution.objects.get(id=id)
        #create parameter instance 
        #let's check if it's already exists;
        #i need year
      year=2023
      weightRP=40
      parameter=Parameter.objects.filter(college=college,year=year,name='RPP').first()
      if parameter is None:
            #create instance
            parameter=Parameter.objects.create(college=college,year=year,name="RPP",weight=weightRP)
        
            #parameter1
      cmp=Subparameter.objects.filter(year=year,college=college,name="CMP",parameter=parameter).first()
      if cmp is None: 
          cmp=Subparameter.objects.create(year=year,college=college,name="CMP",parameter=parameter,weight=35)
          
        #for 1st subparamter 
      cmpmodel=CMP.objects.get(year=year,college=college)
      #to get data for thr permenent faculty we need fsr model
      fsrmodel=FSR.objects.get(year=year,college=college)
      cmpscore=35*(cmpmodel.np/fsrmodel.permanent_faculty)
      print("cmpscore="+str(cmpscore))
    
      
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=cmp).first()
      if subparameterscore is None:
        SubparameterScore.objects.create(year=year,subparameter=cmp,college=college,parameter=parameter,score=cmpscore)
        print("yes created subparameter for cmp")
      print(subparameterscore)
     #--------QP---------
      qp=Subparameter.objects.filter(year=year,college=college,name="QP",parameter=parameter).first()
      if qp is None:
          qp=Subparameter.objects.create(year=year,college=college,name="QP",parameter=parameter,weight=30)
          
      qpmodel=QP.objects.get(year=year,college=college)
      qpscore=20*(qpmodel.total_citation_Count/fsrmodel.permanent_faculty)+15*(qpmodel.top_25_percent/cmpmodel.np)
      print("qpscore="+str(qpscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=qp).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=qp,college=college,parameter=parameter,score=qpscore)
        print("yes created subparameter for qp")
      print(subparameterscore)
      
     #----------IPR---------
      ipr=Subparameter.objects.filter(year=year,college=college,name="IPR",parameter=parameter).first()
      if ipr is None:
          ipr=Subparameter.objects.create(year=year,college=college,name="IPR",parameter=parameter,weight=15)
          
      iprmodel=IPR.objects.get(year=year,college=college)
      ipg=10*iprmodel.patents_granted
      ipp=5*iprmodel.patents_published
      iprscore=ipg+ipp
      print("iprcore="+str(iprscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=ipr).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=ipr,college=college,parameter=parameter,score=iprscore)
        print("yes created subparameter for ipr")

      print(subparameterscore)

      
#----------fppp---------
      fppp=Subparameter.objects.filter(year=year,college=college,name="FPPP",parameter=parameter).first()
      if fppp is None:
          fppp=Subparameter.objects.create(year=year,college=college,name="FPPP",parameter=parameter,weight=15)
          
      frumodel=PU.objects.get(year=year,college=college)
      FPR=5*frumodel.research_fundings
      FPC=5*frumodel.consultation_fundings
      EDP=5*frumodel.edp_fundings

      fpppscore = FPR + FPC + EDP
      print("fppscore="+str(fpppscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=fppp).first()
    
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=fppp,college=college,parameter=parameter,score=fpppscore)
        print("yes created subparameter for fppp")
      

      #RPP Parameter score:
      rppsubparameterscores=SubparameterScore.objects.filter(year=year,college=college,parameter=parameter)
      rppscore=0
      for subparameterscore in rppsubparameterscores:
           rppscore+=subparameterscore.score

      scoretable=Score.objects.filter(year=year,college=college,parameter=parameter).first()
      if scoretable is None:
          scoreinstance=Score.objects.create(year=year,college=college,parameter=parameter,score=rppscore)
          print("Score table is created")
         
      print(scoretable)
      return HttpResponse("success:RPP Score="+str(rppscore))
    
    
#this view is function based view which is used to calculate the graduation outcome  parameter of the score ..
@csrf_exempt
def calculate_GraduationOutcomes(request,id):
      college = Institution.objects.get(id=id)
        #create parameter instance 
        #let's check if it's already exists;
        #i need year
      year=2023
      weightGO=5
      parameter=Parameter.objects.filter(college=college,year=year,name='GO').first()
      if parameter is None:
            #create instance
            parameter=Parameter.objects.create(college=college,year=year,name="GO",weight=weightGO)
        
            #parameter1
      mue=Subparameter.objects.filter(year=year,college=college,name="MUE",parameter=parameter).first()
      if mue is None: 
          mue=Subparameter.objects.create(year=year,college=college,name="MUE",parameter=parameter,weight=60)
          
        #for 1st subparamter 
      muemodel=GUE.objects.get(year=year,college=college)
    
      muescore=60*min((muemodel.students_passed/80),1)
      print("cmpscore="+str(muescore))
    
      
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=mue).first()
      if subparameterscore is None:
        SubparameterScore.objects.create(year=year,subparameter=mue,college=college,parameter=parameter,score=muescore)
        print("yes created subparameter for mue")
      print(subparameterscore)
     #--------for 2nd subparameter---------
      gphd=Subparameter.objects.filter(year=year,college=college,name="GPHD",parameter=parameter).first()
      if gphd is None:
          gphd=Subparameter.objects.create(year=year,college=college,name="GPHD",parameter=parameter,weight=40)
          
      gphdmodel=GPHD.objects.get(year=year,college=college)
      gphdscore=40*(gphdmodel.students_graduated)
      print("qpscore="+str(gphdscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=gphd).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=gphd,college=college,parameter=parameter,score=gphdscore)
        print("yes created subparameter for gphd")
      print(subparameterscore)
      
    

      #GO Parameter score:
      gosubparameterscores=SubparameterScore.objects.filter(year=year,college=college,parameter=parameter)
      goscore=0
      for subparameterscore in gosubparameterscores:
           goscore+=subparameterscore.score

      scoretable=Score.objects.filter(year=year,college=college,parameter=parameter).first()
      if scoretable is None:
          scoreinstance=Score.objects.create(year=year,college=college,parameter=parameter,score=goscore)
          print("Score table is created")
         
      print(scoretable)
      return HttpResponse("success:GO Score="+str(goscore))


 
#this view is function based view which is used to calculate the OI parameter of the score ..
@csrf_exempt
def calculate_OutreachAndInclusive(request,id):
            
      college = Institution.objects.get(id=id)
        #create parameter instance 
        #let's check if it's already exists;
        #i need year
      year=2023
      weightOI=5
      parameter=Parameter.objects.filter(college=college,year=year,name='OI').first()
      if parameter is None:
            #create instance
            parameter=Parameter.objects.create(college=college,year=year,name="OI",weight=weightOI)
        
            #parameter1
      rd=Subparameter.objects.filter(year=year,college=college,name="RD",parameter=parameter).first()
      if rd is None: 
          rd=Subparameter.objects.create(year=year,college=college,name="RD",parameter=parameter,weight=30)
          
        #for 1st subparamter 
      rdmodel=RD.objects.get(year=year,college=college)
      #to get data for the student intake  we need ss model
      ssmodel=SS.objects.get(year=year,college=college)
    
      rdscore=25*(rdmodel.studentsFromOthStates/ssmodel.actualIntake)+5*(rdmodel.studentsFromOthCntry/ssmodel.actualIntake)
      
      print("rdscore="+str(rdscore))
    
      
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=rd).first()
      if subparameterscore is None:
        SubparameterScore.objects.create(year=year,subparameter=rd,college=college,parameter=parameter,score=rdscore)

      print(subparameterscore)
     #--------WD---------
      wd=Subparameter.objects.filter(year=year,college=college,name="WD",parameter=parameter).first()
      if wd is None:
          wd=Subparameter.objects.create(year=year,college=college,name="WD",parameter=parameter,weight=30)
           
      wdmodel=WD.objects.get(year=year,college=college)
      wdscore= 15 * (wdmodel.womenStudents/50) + 15 * (wdmodel.womenFaculty/20)
      print("wdscore="+str(wdscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=wd).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=wd,college=college,parameter=parameter,score=wdscore)
    
      print(subparameterscore)
      
     #----------ESCS--------
      escs=Subparameter.objects.filter(year=year,college=college,name="ESCS",parameter=parameter).first()
      if escs is None:
          escs=Subparameter.objects.create(year=year,college=college,name="ESCS",parameter=parameter,weight=20)
          
      escsmodel=ESCS.objects.get(year=year,college=college)
      """Nesc is the percentage of UG or *PG students being provided full tuition fee
         rembursement by the institution to pursue their degree programs.
      """
      escsmodel=ESCS.objects.get(year=year,college=college)
      Nesc=(escsmodel.total_students/ssmodel.actualIntake)*100
      escsscore = 20*Nesc
      print("iprcore="+str(escsscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=escs).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=escs,college=college,parameter=parameter,score=escsscore)
    

      print(subparameterscore)

      
      #Facilities for Physically Challenged Students (PCS)
      """PCS = 20 marks, if the Institute provides full facilities for physically
      challenged students, as outlined.
      Else, in proportion to facilities.
      """
      
      pcs=Subparameter.objects.filter(year=year,college=college,name="PCS",parameter=parameter).first()
      if pcs is None:
          pcs=Subparameter.objects.create(year=year,college=college,name="PCS",parameter=parameter,weight=20)
          
      pcsscore=20
      print("pcsscore="+str(pcsscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=pcs).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=pcs,college=college,parameter=parameter,score=pcsscore)
    

     
      #OI Parameter score:
      oisubparameterscores=SubparameterScore.objects.filter(year=year,college=college,parameter=parameter)
      oiscore=0
      for subparameterscore in oisubparameterscores:
           oiscore+=subparameterscore.score

      scoretable=Score.objects.filter(year=year,college=college,parameter=parameter).first()
      if scoretable is None:
          scoreinstance=Score.objects.create(year=year,college=college,parameter=parameter,score=oiscore)
          print("Score table is created")
         
      print(scoretable)
      return HttpResponse("success:oi Score="+str(oiscore))


#calculate overall score for the college in a particular year ..
@csrf_exempt
def calculateOverallScore(request,id):
      college = Institution.objects.get(id=id)
      year=2023
      calculate_tlr_score(request,id)
      calculate_ResearchANDProffesional(request,id)
      calculate_GraduationOutcomes(request,id)
      calculate_OutreachAndInclusive(request,id)
      #need to query Parametr for weights and Score for scores table
      parameter=Parameter.objects.filter(year=year,college=college)
      score=Score.objects.filter(year=year,college=college)
      
      overallscore=0
      for i in range(4):
          overallscore+=score[i].score
      
      institutionscore=InstitutionScore.objects.filter(college=college,year=year).first()
      if institutionscore is None:
          institutionscore=InstitutionScore(college=college,year=year,Score=overallscore)
      else:
          institutionscore.Score=overallscore
      
      institutionscore.save()
            
      return HttpResponse(overallscore)
          

import json

#api for get id 
#parameter 1
#api for ss
@csrf_exempt
def ssgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    ssmodel=SS.objects.get(year=year,college=college)
    print(ssmodel)
    data = {
    'id': ssmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#api for fsr
@csrf_exempt
def fsrgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    fsrmodel=FSR.objects.get(year=year,college=college)
    print(fsrmodel)
    data = {
    'id': fsrmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')



#api for fqe
@csrf_exempt
def fqegetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    fqemodel=FQE.objects.get(year=year,college=college)
    print(fqemodel)
    data = {
    'id': fqemodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')

    

#api for fru
@csrf_exempt
def frugetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    frumodel=FRU.objects.get(year=year,college=college)
    print(frumodel)
    data = {
    'id': frumodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')

#parameter 2
#api for PU
@csrf_exempt
def pugetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    pumodel=PU.objects.get(year=year,college=college)
    print(pumodel)
    data = {
    'id': pumodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#api for cmp
@csrf_exempt
def cmpgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    cmpmodel=CMP.objects.get(year=year,college=college)
    print(cmpmodel)
    data = {
    'id': cmpmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#api for qp
@csrf_exempt
def qpgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    qpmodel=QP.objects.get(year=year,college=college)
    print(qpmodel)
    data = {
    'id': qpmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#api for ipr
@csrf_exempt
def iprgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    iprmodel=IPR.objects.get(year=year,college=college)
    print(iprmodel)
    data = {
    'id': iprmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#parameter 3
#api for gue
@csrf_exempt
def guegetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    guemodel=GUE.objects.get(year=year,college=college)
    print(guemodel)
    data = {
    'id': guemodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#api for gphd
@csrf_exempt
def gphdgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    gphdmodel=GPHD.objects.get(year=year,college=college)
    print(gphdmodel)
    data = {
    'id': gphdmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#parameter 4
#api for RD
@csrf_exempt
def rdgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    rdmodel=RD.objects.get(year=year,college=college)
    print(rdmodel)
    data = {
    'id': rdmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')

#api for wd
@csrf_exempt
def wdgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    wdmodel=WD.objects.get(year=year,college=college)
    print(wdmodel)
    data = {
    'id': wdmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')


#api for escs
@csrf_exempt
def escsgetview(request,id):
    strsplit=id.split('-')
    year=strsplit[0]
    college=strsplit[1]
    escsmodel=ESCS.objects.get(year=year,college=college)
    print(escsmodel)
    data = {
    'id': escsmodel.id
    }

    return HttpResponse(json.dumps(data), content_type='application/json')



# api for get the list of colleges for comparision purpose
# url=lacalhost:8000/api/college_list/2023-collegeid/
@csrf_exempt
def list_of_colleges(request,id):
    listofclg=Institution.objects.exclude(pk=id)
    lc=[]
    i=0
    for clg in listofclg:
       if str(clg)!='admin':
            obj1=dict()
            obj1['clgid']=clg.id
            obj1['clgname']=clg.collegename
            lc.append(obj1)

    print(lc)
       
             
    return HttpResponse(json.dumps(lc), content_type='application/json')
 

@csrf_exempt
def college_Comparision(request,id,id1):
    #id = ourclgid-toclgid
    #id1 = year
    strsplit=id.split("-")
    ourclgid=strsplit[0]
    toclgid=strsplit[1]
    year=id1
    #print(ourclgid)
    #ourclgsubparametrscore=SubparameterScore.objects.filter(college=ourclgid,year=year)
    obj1=dict()
    print(ourclgid)
    print("hello")
    try:
     if len(Score.objects.filter(college=ourclgid,year=year))!=len(Score.objects.filter(college=toclgid,year=year)):
        raise Exception
    except Exception:
        return HttpResponse("you missed to enter some of the parameters data")

   # for 1st college
    obj1[str(Institution.objects.get(id=ourclgid))]={}
    for parameter in reversed(Parameter.objects.filter(college=ourclgid,year=year)):
        print(parameter)
        obj1[str(parameter.college.collegename)][str(parameter)]={}
        for subparameter in Subparameter.objects.filter(college=ourclgid,year=year,parameter=parameter):
            print(":")
            print(subparameter)
            obj1[str(parameter.college.collegename)][str(parameter)][str(subparameter)]=float(SubparameterScore.objects.get(subparameter=subparameter,year=year,college=ourclgid,parameter=parameter).score)
    # for second college
    obj1[str(Institution.objects.get(id=toclgid))]={}
    for parameter in reversed(Parameter.objects.filter(college=toclgid,year=year)):
        print(parameter)
        obj1[str(parameter.college.collegename)][str(parameter)]={}
        for subparameter in Subparameter.objects.filter(college=toclgid,year=year,parameter=parameter):
            print(":")
            print(subparameter)
            obj1[str(parameter.college.collegename)][str(parameter)][str(subparameter)]=float(SubparameterScore.objects.get(subparameter=subparameter,year=year,college=toclgid,parameter=parameter).score)
                         
         
    print(obj1) 
    #toclgsubparameterscore=SubparameterScore.objects.filter(college=toclgid,year=year)
    return HttpResponse(json.dumps(obj1), content_type='application/json')

#to calculate the rank of the college
import pandas as pd
@csrf_exempt
def college_ranking(request,id):
    strsplit=id.split('-')
    collegeid=strsplit[0]
    collegename=Institution.objects.get(id=collegeid).collegename
    print(collegename)
    year=strsplit[1]
    clgnamelist=[]
    clgscorelist=[]
    for i in InstitutionScore.objects.filter(year=year):
        strsplit=str(i).split(":")
        clgnamelist.append(strsplit[0])
        clgscorelist.append(float(strsplit[1]))
    
    dict1={"College":clgnamelist,
           "Scores":clgscorelist
           }
    df = pd.DataFrame(dict1)
    df=df.sort_values(by='Scores',ignore_index=True,ascending=False)
    print(df)
    filter=df['College']==collegename
    df=df[filter]
    rank=df.index.values[0]
    return  HttpResponse(rank+1)



    




