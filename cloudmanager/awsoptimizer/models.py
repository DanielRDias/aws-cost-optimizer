from django.db import models

class AwsOptimizer(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField(max_length=64, unique=True)
    # Account ID can start with 0
    accountid = models.CharField(max_length=12)
    account_name = models.CharField(max_length=64)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
