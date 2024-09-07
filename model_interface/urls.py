from django.urls import path
from .views import predict_value

urlpatterns = [
    path('api/predict/model1/', predict_value, {'model_type': 'model_1'}, name='predict_model_1'),
    path('api/predict/model2/', predict_value, {'model_type': 'model_2'}, name='predict_model_2'),
]
