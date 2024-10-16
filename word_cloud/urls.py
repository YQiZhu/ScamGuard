from django.urls import path, include
from .views import scam_categories_view

urlpatterns = [
    path('api/scam-categories/', scam_categories_view, name='scam_categories'),
]
