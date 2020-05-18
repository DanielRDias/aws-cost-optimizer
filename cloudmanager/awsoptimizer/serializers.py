from rest_framework import serializers
from awsoptimizer.models import AwsOptimizer

# AwsOptimizer Serializer
class AwsOptimizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AwsOptimizer
        fields = '__all__'