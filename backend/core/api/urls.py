from django.urls import path
from .views import user_info
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('me/', user_info),
    path('api-token-auth/', obtain_auth_token),
]
