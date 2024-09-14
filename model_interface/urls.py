from django.urls import path
from .views import predict_value

urlpatterns = [
    path('api/predict/email/', predict_value, {'model_type': 'model_email'}, name='predict_model_email'),
    path('api/predict/message/', predict_value, {'model_type': 'model_message'}, name='predict_model_message'),
    path('api/predict/url/', predict_value, {'model_type': 'model_url'}, name='predict_model_url'),
]
