import os
import re
import string
import joblib
from lime.lime_text import LimeTextExplainer
from sklearn.pipeline import make_pipeline
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.conf import settings
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from django.views.decorators.csrf import csrf_exempt
from gensim.parsing.preprocessing import remove_stopwords

# Email verification regular expression
EMAIL_REGEX = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

# Paths to models and vectorizers
model_email_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_classifier.pkl')
model_message_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_classification.pkl')
model_url_path = os.path.join(settings.BASE_DIR, 'model_interface', 'url_classifier.pkl')

email_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_vectorizer.pkl')
text_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_vectorizer.pkl')
url_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'url_vectorizer.pkl')

def load_model(model_path):
    """Helper function to load models on demand."""
    return joblib.load(model_path)

@csrf_exempt
@api_view(['POST'])
def predict_value(request, model_type):
    """
    Receive parameters from the front end and make predictions.
    Models and vectorizers are loaded only when required to reduce memory usage.
    """
    try:
        data = request.data

        # For model_1: process sender_name, email_address, message_subject, message_body
        if model_type == 'model_email':
            required_fields = {'body': data.get('body')}
            optional_fields = {
                'name_of_the_sender': data.get('name_of_the_sender', ''),
                'sender_email_address': data.get('sender_email_address', ''),
                'message_subject': data.get('message_subject', '')
            }

            # Check if 'body' field is missing
            if not required_fields['body']:
                return Response({"error": "The 'body' field is missing."}, status=status.HTTP_400_BAD_REQUEST)

            # Verify email format if provided
            email_address = optional_fields['sender_email_address']
            if email_address and not re.match(EMAIL_REGEX, email_address):
                return Response({"error": "Invalid email format"}, status=status.HTTP_400_BAD_REQUEST)

            # Concatenate all non-empty fields into a single input string
            user_input = ' '.join([
                optional_fields['name_of_the_sender'],
                optional_fields['sender_email_address'],
                optional_fields['message_subject'],
                required_fields['body']
            ]).strip()

            # Preprocess text
            user_input_low = user_input.lower()
            regex = re.compile('[%s]' % re.escape(string.punctuation))
            clean_input = regex.sub('', user_input_low)
            clean_input = remove_stopwords(clean_input)

            # Load the model and vectorizer on demand
            email_vectorizer = load_model(email_vectorizer_path)
            model_email = load_model(model_email_path)

            # Transform input and make predictions
            processed_input = email_vectorizer.transform([clean_input])
            prediction = model_email.predict(processed_input)[0]
            prob = model_email.predict_proba(processed_input)[0][prediction]

            # Create explanation
            explainer = LimeTextExplainer()
            email_pipeline = make_pipeline(email_vectorizer, model_email)
            explanation = explainer.explain_instance(clean_input, email_pipeline.predict_proba, num_features=5)
            explanation = [word[0] for word in explanation.as_list()]

            # Return prediction results with explanation
            return Response({
                "prediction": int(prediction),
                "probability": float(prob),
                "explanation": explanation
            }, status=status.HTTP_200_OK)

        # For model_2: process only message_body
        elif model_type == 'model_message':
            message_body = data.get('body')

            if not message_body:
                return Response({"error": "Message body is required for model_2"}, status=status.HTTP_400_BAD_REQUEST)

            # Preprocess text
            message_body_low = message_body.lower()
            regex = re.compile('[%s]' % re.escape(string.punctuation))
            clean_input = regex.sub('', message_body_low)
            clean_input = remove_stopwords(clean_input)

            # Load the model and vectorizer on demand
            text_vectorizer = load_model(text_vectorizer_path)
            model_message = load_model(model_message_path)

            # Transform input and make predictions
            processed_input = text_vectorizer.transform([clean_input])
            print(f"Processed Input Shape: {processed_input.shape}")
            print(f"Processed Input Type: {type(processed_input)}")
            try:
                prediction = model_message.predict(processed_input)[0]
                prob = model_message.predict_proba(processed_input)[0][prediction]
            except Exception as e:
                print(f"Error during model prediction: {e}")
                return Response({"error": f"Error during model prediction: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            # Create explanation
            explainer = LimeTextExplainer()
            message_pipeline = make_pipeline(text_vectorizer, model_message)
            explanation = explainer.explain_instance(clean_input, message_pipeline.predict_proba, num_features=5)
            explanation = [word[0] for word in explanation.as_list()]

            # Return prediction results with explanation
            return Response({
                "prediction": int(prediction),
                "probability": float(prob),
                "explanation": explanation
            }, status=status.HTTP_200_OK)

        # For the URL model
        elif model_type == 'model_url':
            url_input = data.get('url')

            if not url_input:
                return Response({"error": "This is not a URL! Please try again."}, status=status.HTTP_400_BAD_REQUEST)

            # URL validation
            url_validator = URLValidator()
            try:
                url_validator(url_input)
            except ValidationError:
                return Response({"error": "Invalid URL format!"}, status=status.HTTP_400_BAD_REQUEST)

            # Preprocess URL input
            clean_input = re.sub(r'^https?://', '', url_input)

            # Load the model and vectorizer on demand
            url_vectorizer = load_model(url_vectorizer_path)
            model_url = load_model(model_url_path)

            # Transform input and make predictions
            processed_input = url_vectorizer.transform([clean_input])
            prediction = model_url.predict(processed_input)[0]
            prob = model_url.predict_proba(processed_input)[0][prediction]

            # Return prediction and probability results
            return Response({"prediction": int(prediction), "probability": float(prob)}, status=status.HTTP_200_OK)

        else:
            return Response({"error": "Invalid model type."}, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        # Return error information
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
