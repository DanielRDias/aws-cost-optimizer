from awsoptimizer.models import AwsOptimizer
from rest_framework import viewsets, permissions
from .serializers import AwsOptimizerSerializer

# AwsOptimizer Viewset
class AwsOptimizerViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = AwsOptimizerSerializer

    def get_queryset(self):
        return self.request.user.AwsOptimizer.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)