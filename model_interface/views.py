from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import os, re
import joblib
import numpy as np


# Assuming the model is serialized into a .pkl file via joblib
model_path = os.path.join(settings.BASE_DIR, 'path_to_model.pkl')
model = joblib.load(model_path)

# Email verification regular expression
EMAIL_REGEX = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'


@api_view(['POST'])
def predict_value(request):
    """
    Receive parameters passed by the front end and make predictions
    """
    try:
        # Get the data entered by the front-end user from the POST request
        data = request.data

        # Get user input fields
        sender_name = data.get('name_of_the_sender')
        email_address = data.get('email_address')
        message_body = data.get('body')

        # Data validation: Check if a field is empty
        if not sender_name or not email_address or not message_body:
            return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Verify email format
        if not re.match(EMAIL_REGEX, email_address):
            return Response({"error": "Invalid email format"}, status=status.HTTP_400_BAD_REQUEST)

        # Data preprocessing: Converting input into the format required by the model
        user_input = [sender_name, email_address, message_body]
        processed_input = np.array(user_input).reshape(1, -1)

        # Using the model to make predictions
        prediction = model.predict(processed_input)

        # Return prediction results to the front end
        return Response({"prediction": prediction[0]}, status=status.HTTP_200_OK)

    except Exception as e:
        # If there is an error, return the error message
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
