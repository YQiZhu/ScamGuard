from django.urls import path, include
from .views import get_ac51_view, get_ac52_view

urlpatterns = [
    path('api/contact_method_risk/', get_ac51_view, name='contact_method_risk'),
    path('api/demographic_risk/', get_ac52_view, name='demographic_risk'),
]