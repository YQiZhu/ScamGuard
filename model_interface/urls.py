from django.urls import path
from .views import predict_value

urlpatterns = [
    path('api/predict/', predict_value, name='predict_value'),
]