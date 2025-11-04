from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    # You can customize what fields show up here if needed

admin.site.register(CustomUser, CustomUserAdmin)
