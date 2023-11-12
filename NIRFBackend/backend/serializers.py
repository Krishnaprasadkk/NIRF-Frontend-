from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Institution, Parameter, Subparameter,SubparameterScore,Score, Faculty, ResearchOutput, StudentPlacement, TLR, SS, FSR, FQE, FRU, RP, PU, CMP, QP, IPR, GO, GUE, GPHD, OI, RD, WD, ESCS, PRRanking

class InstitutionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Institution
        fields = ['id','collegename','email','password']
        extra_kwargs={
            'password':{'write_only':True}
        }
    def create(self, validated_data):
        password=validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ParameterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parameter
        fields = '__all__'


class ScoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Score
        fields = '__all__'



class SubparameterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subparameter
        fields = '__all__'

class SubparameterScoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubparameterScore
        fields = '__all__'


class FacultySerializer(serializers.ModelSerializer):

    class Meta:
        model = Faculty
        fields = '__all__'


class ResearchOutputSerializer(serializers.ModelSerializer):

    class Meta:
        model = ResearchOutput
        fields = '__all__'


class StudentPlacementSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentPlacement
        fields = '__all__'


class TLRSerializer(serializers.ModelSerializer):

    class Meta:
        model = TLR
        fields = '__all__'


class SSSerializer(serializers.ModelSerializer):

    class Meta:
        model = SS
        fields = '__all__'


class FSRSerializer(serializers.ModelSerializer):

    class Meta:
        model = FSR
        fields = '__all__'


class FQESerializer(serializers.ModelSerializer):

    class Meta:
        model = FQE
        fields = '__all__'


class FRUSerializer(serializers.ModelSerializer):

    class Meta:
        model = FRU
        fields = '__all__'


class RPSerializer(serializers.ModelSerializer):

    class Meta:
        model = RP
        fields = '__all__'


class PUSerializer(serializers.ModelSerializer):

    class Meta:
        model = PU
        fields = '__all__'


class CMPSerializer(serializers.ModelSerializer):

    class Meta:
        model = CMP
        fields = '__all__'


class QPSerializer(serializers.ModelSerializer):

    class Meta:
        model = QP
        fields = '__all__'


class IPRSerializer(serializers.ModelSerializer):

    class Meta:
        model = IPR
        fields = '__all__'


class GOSerializer(serializers.ModelSerializer):

    class Meta:
        model = GO
        fields = '__all__'


class GUESerializer(serializers.ModelSerializer):

    class Meta:
        model = GUE
        fields = '__all__'


class GPHDSerializer(serializers.ModelSerializer):

    class Meta:
        model = GPHD
        fields = '__all__'


class OISerializer(serializers.ModelSerializer):

    class Meta:
        model = OI
        fields = '__all__'


class RDSSerializer(serializers.ModelSerializer):

    class Meta:
        model = RD
        fields = '__all__'


class WDSSerializer(serializers.ModelSerializer):

    class Meta:
        model = WD
        fields = '__all__'


class ESCSSSerializer(serializers.ModelSerializer):

    class Meta:
        model = ESCS
        fields = '__all__'


class PRRankingSerializer(serializers.ModelSerializer):

    class Meta:
        model = PRRanking
        fields = '__all__'