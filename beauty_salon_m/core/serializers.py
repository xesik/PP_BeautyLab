from rest_framework import serializers
from .models import Post, Master, Service, ServiceCategory, User, Appointment


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'text']  # можно добавить image, если нужно

class MasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Master
        fields = ['id', 'name', 'rating', 'category']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'price', 'service_cat']

class ServiceCategoryWithServicesSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(source='service_set', many=True)

    class Meta:
        model = ServiceCategory
        fields = ['id', 'name', 'services']

class AppointmentCreateSerializer(serializers.Serializer):
    name = serializers.CharField()
    phone = serializers.CharField()
    comment = serializers.CharField(required=False, allow_blank=True)
    datetime = serializers.CharField()

    master = serializers.CharField()
    service = serializers.CharField()

    def create(self, validated_data):
        print("🧾 Данные, пришедшие в сериализатор:", validated_data)
        print("📥 Сырые входные данные:", self.initial_data)
        # 1. Найти мастера
        try:
            master = Master.objects.get(name=validated_data["master"])
        except Master.DoesNotExist:
            raise serializers.ValidationError({"master": "Мастер не найден"})

        # 2. Найти услугу
        try:
            service = Service.objects.get(name=validated_data["service"])
        except Service.DoesNotExist:
            raise serializers.ValidationError({"service": "Услуга не найдена"})

        # 3. Создать или найти пользователя
        user, _ = User.objects.get_or_create(
            login=validated_data["phone"],
            defaults={
                "name": validated_data["name"],
                "phone": validated_data["phone"],
                "role": "client",
            },
        )

        # 4. Разобрать дату и время
        try:
            date_str, time_str = validated_data["datetime"].split()
        except ValueError:
            raise serializers.ValidationError({"datetime": "Неверный формат: ожидалось 'YYYY-MM-DD HH:MM'"})

        # 5. Создать запись
        return Appointment.objects.create(
            user=user,
            master=master,
            service=service,
            appointment_date=date_str,
            appointment_time=time_str,
        )

class SlotSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(max_length=255)
    phone = serializers.CharField(max_length=20)
    date = serializers.DateField()
    time = serializers.TimeField()
    master_id = serializers.IntegerField()
    service_id = serializers.IntegerField()