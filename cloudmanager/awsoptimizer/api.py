from awsoptimizer.models import AwsOptimizer
from rest_framework import viewsets, permissions
from .serializers import AwsOptimizerSerializer

# AwsOptimizer Viewset
class AwsOptimizerViewSet(viewsets.ModelViewSet):
    queryset = AwsOptimizer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AwsOptimizerSerializer