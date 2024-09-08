from django.urls import path, include
from .views import get_ac51_view, get_ac52_view, analyse_scam

urlpatterns = [
    path('api/contact_method_risk/', get_ac51_view, name='contact_method_risk'),
    path('api/demographic_risk/', get_ac52_view, name='demographic_risk'),
    # path('api/analyse_scam', analyse_scam, name='analyse_scam'),
]