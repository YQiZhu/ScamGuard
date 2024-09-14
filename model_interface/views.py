from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from gensim.parsing.preprocessing import remove_stopwords
import os, re
import string
import joblib



# Use BASE_DIR to dynamically generate absolute paths
model_email_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_classifier.pkl')
model_message_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_classification.pkl')
model_url_path = os.path.join(settings.BASE_DIR, 'model_interface', 'url_classifier.pkl')

# Read vectorizer files
email_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_vectorizer.pkl')
text_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_vectorizer.pkl')
url_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'url_vectorizer.pkl')

# Load models
model_email = joblib.load(model_email_path)
model_message = joblib.load(model_message_path)
model_url = joblib.load(model_url_path)

# Load vectorizers
email_vectorizer = joblib.load(email_vectorizer_path)
text_vectorizer = joblib.load(text_vectorizer_path)
url_vectorizer = joblib.load(url_vectorizer_path)

# Email verification regular expression
EMAIL_REGEX = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

@csrf_exempt
@api_view(['POST'])
def predict_value(request, model_type):
    """
    Receive parameters passed by the front end and make predictions
    """
    try:
        # Get the data entered by the front-end user from the POST request
        data = request.data

        # For model_1: process sender_name, email_address, message_subject, message_body
        # Only 'message_body' is required
        if model_type == 'model_email':
            required_fields = {
                'body': data.get('body')
            }

            optional_fields = {
                'name_of_the_sender': data.get('name_of_the_sender', ''),
                'sender_email_address': data.get('sender_email_address', ''),
                'message_subject': data.get('message_subject', '')
            }

            # Check if 'body' field is missing
            if not required_fields['body']:
                return Response({"error": "The 'body' field is missing."},
                                status=status.HTTP_400_BAD_REQUEST)

            # If email is provided, verify email format
            email_address = optional_fields['sender_email_address']
            if email_address and not re.match(EMAIL_REGEX, email_address):
                return Response({"error": "Invalid email format"}, status=status.HTTP_400_BAD_REQUEST)

            # Data preprocessing: Concatenate all non-empty fields into a single input string
            user_input = ' '.join([
                optional_fields['name_of_the_sender'],
                optional_fields['sender_email_address'],
                optional_fields['message_subject'],
                required_fields['body']
            ]).strip()  # Combine all fields, and remove leading/trailing whitespace

            # Preprocess text
            user_input_low = user_input.lower()
            regex = re.compile('[%s]' % re.escape(string.punctuation))
            clean_input = regex.sub('', user_input_low)
            clean_input = remove_stopwords(clean_input)
            processed_input = email_vectorizer.transform([clean_input])

            # Use model_1 to make predictions
            prediction = model_email.predict(processed_input)[0]
            prob = model_email.predict_proba(processed_input)[0][prediction]

        # For model_2: process only message_body
        elif model_type == 'model_message':
            message_body = data.get('body')

            # Data validation: Check if there are empty fields
            if not message_body:
                return Response({"error": "Message body is required for model_2"}, status=status.HTTP_400_BAD_REQUEST)

            # Data preprocessing: Convert the input data into the format required by the model
            message_body_low = message_body.lower()
            regex = re.compile('[%s]' % re.escape(string.punctuation))
            clean_input = regex.sub('', message_body_low)
            clean_input = remove_stopwords(clean_input)
            processed_input = text_vectorizer.transform([clean_input])

            # Use model_2 to make predictions
            prediction = model_message.predict(processed_input)[0]
            prob = model_message.predict_proba(processed_input)[0][prediction]

            # For the third model (URL model)
        elif model_type == 'model_url':
            url_input = data.get('url')

            if not url_input:
                return Response({"error": "This is not a URL! Please try again."}, status=status.HTTP_400_BAD_REQUEST)

            # URL Validation
            url_validator = URLValidator()
            try:
                url_validator(url_input)
            except ValidationError:
                return Response({"error": "Invalid URL format!"}, status=status.HTTP_400_BAD_REQUEST)

            # If URL is valid, proceed with pre-processing
            # Please write your url preprocessing here !!! Hey Angus! Here! Do u see me ??

            # Use model_url to make predictions
            # prediction = model_url.predict(processed_input)[0]
            # prob = model_url.predict_proba(processed_input)[0][prediction]


        else:
            return Response({"error": "You have to choose one model for Scam Detector"}, status=status.HTTP_400_BAD_REQUEST)

        # Return prediction results
        return Response({"prediction": int(prediction), "probability": float(prob)}, status=status.HTTP_200_OK)


    except Exception as e:
        # Return error information
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
