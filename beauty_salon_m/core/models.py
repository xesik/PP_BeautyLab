from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.dateparse import parse_duration


# Кастомный менеджер пользователей
class UserManager(BaseUserManager):
    def create_user(self, login, password=None, **extra_fields):
        if not login:
            raise ValueError("Login is required")
        user = self.model(login=login, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, login, password=None, **extra_fields):
        extra_fields.setdefault("role", "admin")
        return self.create_user(login, password, **extra_fields)


# Кастомный пользователь
class User(AbstractBaseUser, PermissionsMixin):
    login = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    is_staff = models.BooleanField(default=False)
    role = models.CharField(max_length=50)  # admin / client
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "login"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.login


class Post(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    image = models.ImageField(upload_to='posts/', null=True, blank=True)

    def __str__(self):
        return self.title


class PostImage(models.Model):
    image_url = models.TextField()  # пусть будет как текст

    def __str__(self):
        return f"Image {self.id}"


class PostManage(models.Model):
    image = models.ForeignKey(PostImage, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)


class ServiceCategory(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Service(models.Model):
    service_cat = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name


class Master(models.Model):
    name = models.CharField(max_length=255)
    rating = models.FloatField()
    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE, related_name="masters")

    def __str__(self):
        return self.name


class Appointment(models.Model):
    STATUS_CHOICES = (
        ('pending', 'В ожидании'),
        ('confirmed', 'Подтверждена'),
        ('cancelled', 'Отменена'),
        ('completed', 'Завершена'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    master = models.ForeignKey(Master, on_delete=models.CASCADE)
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.login} - {self.appointment_date} {self.appointment_time}"
