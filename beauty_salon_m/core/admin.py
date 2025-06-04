from django.contrib import admin
from .models import Post, PostImage, PostManage, ServiceCategory, Service, Master, Appointment

admin.site.register(Post)
admin.site.register(PostImage)
admin.site.register(PostManage)
admin.site.register(ServiceCategory)
admin.site.register(Service)
admin.site.register(Master)
admin.site.register(Appointment)