"""
URL configuration for beauty_salon project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from core.views import PostListView

from core.views import MasterListView

from core.views import ServiceCategoryWithServicesView

from core.views import AppointmentCreateView

from core.views import SlotListView

from core.views import SlotDetailView

from core.views import MastersByCategoryView

from core.views import ServicesByCategoryView

from core.views import PostDetailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/masters/', MasterListView.as_view(), name='master-list'),
    path('api/services/with-categories/', ServiceCategoryWithServicesView.as_view(), name='services-with-categories'),
    path('api/appointments/', AppointmentCreateView.as_view(), name='create-appointment'),
    path("api/appointments/slots/", SlotListView.as_view()),
    path('api/masters/by-category/<int:category_id>/', MastersByCategoryView.as_view()),
    path("api/posts/<int:pk>/", PostDetailView.as_view(), name="post-detail"),
    path("api/appointments/slots/<int:pk>/", SlotDetailView.as_view()),
    path('api/services/by-category/<int:category_id>/', ServicesByCategoryView.as_view()),
    path('api/posts/', PostListView.as_view())
]
