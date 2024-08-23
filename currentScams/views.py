from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.http import JsonResponse
import requests
from django.conf import settings
from rest_framework import viewsets
from .models import ScamReport

# Create your views here.

@require_GET
def get_report(request):
    report = ScamReport.objects.all()
