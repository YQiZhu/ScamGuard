from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import os, re
import string
import joblib
import numpy as np
from gensim.parsing.preprocessing import remove_stopwords


# Use BASE_DIR to dynamically generate absolute paths
model_1_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_classifier.pkl')
model_2_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_classification.pkl')
email_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_vectorizer.pkl')
text_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_vectorizer.pkl')

model_1 = joblib.load(model_1_path)
model_2 = joblib.load(model_2_path)

# Load vectorizers
email_vectorizer = joblib.load(email_vectorizer_path)
text_vectorizer = joblib.load(email_vectorizer_path)

# Email verification regular expression
EMAIL_REGEX = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'


@api_view(['POST'])
def predict_value(request, model_type):
    """
    Receive parameters passed by the front end and make predictions
    """
    try:
        # Get the data entered by the front-end user from the POST request
        data = request.data

        # For model_1: process sender_name, email_address, message_subject, message_body
        if model_type == 'model_1':
            required_fields = {
                'name_of_the_sender': data.get('name_of_the_sender'),
                'sender_email_address': data.get('sender_email_address'),
                'message_subject': data.get('message_subject'),
                'body': data.get('body')
            }

            # Check if any required fields are missing
            missing_fields = [field for field, value in required_fields.items() if not value]

            if missing_fields:
                return Response({"error": f"Missing required fields: {', '.join(missing_fields)}"},
                                status=status.HTTP_400_BAD_REQUEST)

            # Verify email format
            email_address = required_fields['sender_email_address']
            if not re.match(EMAIL_REGEX, email_address):
                return Response({"error": "Invalid email format"}, status=status.HTTP_400_BAD_REQUEST)

            # Data preprocessing: Convert the input data into the format required by the model
            user_input = required_fields['name_of_the_sender'] + ' ' + required_fields['sender_email_address'] + ' ' + required_fields['message_subject'] + ' ' + required_fields['body']

            # Preprocess text
            user_input_low = user_input.lower()
            regex = re.compile('[%s]' % re.escape(string.punctuation))
            clean_input = regex.sub('', user_input_low)
            clean_input = remove_stopwords(clean_input)
            processed_input = email_vectorizer.transform([clean_input])

            # Use model_1 to make predictions
            prediction = model_1.predict(processed_input)
            prob = model_1.predict_proba(processed_input)[0][prediction]

        # For model_2: process only message_body
        elif model_type == 'model_2':
            message_body = data.get('body')

            # Data validation: Check if there are empty fields
            if not message_body:
                return Response({"error": "Message body is required for model_2"}, status=status.HTTP_400_BAD_REQUEST)

            # Data preprocessing: Convert the input data into the format required by the model
            message_body_low = message_body.lower()
            regex = re.compile('[%s]' % re.escape(string.punctuation))
            clean_input = regex.sub('', message_body_low)
            clean_input = remove_stopwords(clean_input)
            processed_input = email_vectorizer.transform([clean_input])

            # Use model_2 to make predictions
            prediction = model_2.predict(processed_input)
            prob = model_2.predict_proba(processed_input)[0][prediction]

        else:
            return Response({"error": "Invalid model_type. Must be 'model_1' or 'model_2'."}, status=status.HTTP_400_BAD_REQUEST)

        # Return prediction results
        return Response({"prediction": prediction[0]}, status=status.HTTP_200_OK)

    except Exception as e:
        # Return error information
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
