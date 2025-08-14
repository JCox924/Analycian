from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
def health(request):
    return HttpResponse("ok", content_type="text/plain", status=200)
@api_view(['GET'])
def ping(request):
    return JsonResponse({"ok": True, "msg": "pong"})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_info(request):
    return JsonResponse({
        "id": request.user.id,
        "username": request.user.username,
        "email": request.user.email,
    })
