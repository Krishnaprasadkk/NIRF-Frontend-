from rest_framework import viewsets
from rest_framework.response import Response
from .models import Institution,Parameter, Subparameter, Faculty,Score,SubparameterScore,ResearchOutput, StudentPlacement, TLR, SS, FSR, FQE, FRU, RP, PU, CMP, QP, IPR, GO, GUE, GPHD, OI, RD, WD, ESCS, PRRanking

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
      fqescore=30.23#formula need to be put.
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
      fruscore=60.23#formula need to be put.
      print("fruscore="+str(fruscore))
      subparameterscore=SubparameterScore.objects.filter(year=year,college=college,subparameter=fru).first()
      if subparameterscore is None:
        subparameterscore=SubparameterScore.objects.create(year=year,subparameter=fru,college=college,parameter=parameter,score=fruscore)
        print("yes created subparameter for fru")

      print(subparameterscore)

      #TLR Parametet score:
      tlrsubparameterscores=SubparameterScore.objects.filter(year=year,college=college,parameter=parameter)
      tlrscore=0
      for subparameterscore in tlrsubparameterscores:
           tlrscore+=subparameterscore.score
      scoretable=Score.objects.filter(year=year,college=college,parameter=parameter)
      if scoretable is None:
          scoreinstance=Score.objects.create(year=year,college=college,parameter=parameter,score=tlrscore)
          print("Score table is created")
      
      print("TLR score ="+str(tlrscore))
      return HttpResponse("success:TLR Score="+str(tlrscore))

    

  
     # Get the TLR model instance for the college.
     # Return the TLR score as a JSON response.
      return HttpResponse(str(college)+str(parameter))