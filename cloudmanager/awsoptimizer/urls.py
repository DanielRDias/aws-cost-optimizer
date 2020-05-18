from rest_framework import routers
from .api import AwsOptimizerViewSet

router = routers.DefaultRouter()
router.register('api/awsoptimizer', AwsOptimizerViewSet, 'awsoptimizer')

urlpatterns = router.urls