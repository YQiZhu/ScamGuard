from django.urls import path, include
from .views import get_most_frequent_scams, get_scams_highest_loss, get_most_scams_contact_methods

urlpatterns = [
    path('api/most_frequent_scams/', get_most_frequent_scams, name='most_frequent_scams'),
    path('api/scams_highest_loss/', get_scams_highest_loss, name='scams_highest_loss'),
    path('api/most_scams_contact_methods/', get_most_scams_contact_methods, name='most_scams_contact_methods'),
    
]
