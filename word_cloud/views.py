from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
import json
import os

def scam_categories_view(request):
    # Load the JSON file from the file system
    file_path = os.path.join(os.path.dirname(__file__), 'data', 'scam_categories.json')
    with open(file_path, 'r') as file:
        scam_categories = json.load(file)
    return JsonResponse(scam_categories, safe=False)
