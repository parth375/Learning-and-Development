from django.contrib.auth.models import AbstractUser
from django.db import models

#----------------------------- User Model-------------------------------------------------------#

class CustomUser(AbstractUser):
    # AbstractUser already includes: username, email, password, first_name, last_name, etc.

    role = models.CharField(max_length=70, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username


#----------------------------- Project Model-------------------------------------------------------#