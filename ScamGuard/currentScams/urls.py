from django.urls import path, include
from .views import get_report

urlpatterns = [
    path('api/scam-report/', get_report, name='scam_report'),
]
