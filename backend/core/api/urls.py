from django.urls import path
from .views import user_info, ping
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('ping/', ping),
    path('me/', user_info),
    path('api-token-auth/', obtain_auth_token),
]
