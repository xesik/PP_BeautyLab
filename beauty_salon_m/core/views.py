from datetime import date, datetime

from django.http import JsonResponse
from django.shortcuts import render

from rest_framework.generics import ListAPIView, CreateAPIView, get_object_or_404, RetrieveAPIView
from rest_framework.utils import json

from .models import Post, Master, ServiceCategory, Appointment, Service
from .serializers import PostSerializer, MasterSerializer, ServiceCategoryWithServicesSerializer, \
    AppointmentCreateSerializer, SlotSerializer, ServiceSerializer

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

User = get_user_model()


class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]


class MasterListView(ListAPIView):
    queryset = Master.objects.all()
    serializer_class = MasterSerializer
    permission_classes = [AllowAny]

class ServiceCategoryWithServicesView(ListAPIView):
    queryset = ServiceCategory.objects.all().prefetch_related('service_set')
    serializer_class = ServiceCategoryWithServicesSerializer
    permission_classes = [AllowAny]

class AppointmentCreateView(CreateAPIView):
    serializer_class = AppointmentCreateSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        appointment = serializer.save()

        return Response({"success": True, "appointment_id": appointment.id})


class SlotListView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        appointments = Appointment.objects.select_related('user', 'master', 'service')

        data = []
        for app in appointments:
            data.append({
                "id": app.id,
                "date": str(app.appointment_date),
                "time": str(app.appointment_time)[:5],
                "name": app.user.name,
                "phone": app.user.phone,
                "service": app.service.name,
                "master": app.master.name,
            })
        return Response(data)

    def post(self, request):
        serializer = SlotSerializer(data=request.data)
        if serializer.is_valid():
            user, _ = User.objects.get_or_create(
                phone=serializer.validated_data['phone'],
                defaults={
                    "login": serializer.validated_data['phone'],
                    "name": serializer.validated_data['name'],
                    "role": "client",
                }
            )
            appointment = Appointment.objects.create(
                user=user,
                appointment_date=request.data['date'],
                appointment_time=request.data['time'],
                master=Master.objects.get(name=request.data['master']),
                service=Service.objects.get(name=request.data['service']),
                status='confirmed'
            )
            return Response({"success": True})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        try:
            appointment = Appointment.objects.get(id=request.data['id'])
        except Appointment.DoesNotExist:
            return Response({"error": "Appointment not found"}, status=status.HTTP_404_NOT_FOUND)

        user, _ = User.objects.get_or_create(
            phone=request.data['phone'],
            defaults={
                "login": request.data['phone'],
                "name": request.data['name'],
                "role": "client",
            }
        )

        appointment.user = user
        appointment.appointment_date = request.data['date']
        appointment.appointment_time = request.data['time']
        appointment.master = Master.objects.get(name=request.data['master'])
        appointment.service = Service.objects.get(name=request.data['service'])
        appointment.save()

        return Response({"success": True})

class SlotDetailView(APIView):
    permission_classes = [AllowAny]
    def delete(self, request, pk):
        try:
            app = Appointment.objects.get(pk=pk)
            app.delete()
            return Response({"success": True})
        except Appointment.DoesNotExist:
            return Response({"error": "Appointment not found"}, status=status.HTTP_404_NOT_FOUND)

class MastersByCategoryView(ListAPIView):
    serializer_class = MasterSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Master.objects.filter(category_id=category_id)

class ServicesByCategoryView(ListAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Service.objects.filter(service_cat_id=category_id)


class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


@csrf_exempt
def admin_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('login')
        password = data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None and user.is_staff:
            login(request, user)  # создаёт сессию
            response = JsonResponse({'message': 'ok'})
            return response
        else:
            return JsonResponse({'error': 'Неверный логин или пароль'}, status=403)


def check_admin(request):
    if request.user.is_authenticated and request.user.is_staff:
        return JsonResponse({'status': 'ok'})
    return JsonResponse({'error': 'unauthorized'}, status=401)