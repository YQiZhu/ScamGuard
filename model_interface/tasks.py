from celery import shared_task
import os, re, string
from gensim.parsing.preprocessing import remove_stopwords
import joblib
from django.conf import settings
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError

# Load models and vectorizers once when Celery starts
model_email_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_classifier.pkl')
model_message_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_classification.pkl')
model_url_path = os.path.join(settings.BASE_DIR, 'model_interface', 'url_classifier.pkl')

email_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'email_vectorizer.pkl')
text_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'text_vectorizer.pkl')
url_vectorizer_path = os.path.join(settings.BASE_DIR, 'model_interface', 'url_vectorizer.pkl')

model_email = joblib.load(model_email_path)
model_message = joblib.load(model_message_path)
model_url = joblib.load(model_url_path)

email_vectorizer = joblib.load(email_vectorizer_path)
text_vectorizer = joblib.load(text_vectorizer_path)
url_vectorizer = joblib.load(url_vectorizer_path)

EMAIL_REGEX = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

@shared_task
def predict_email(data):
    body = data.get('body')
    if not body:
        raise ValueError("The 'body' field is missing.")
    
    email_address = data.get('sender_email_address', '')
    if email_address and not re.match(EMAIL_REGEX, email_address):
        raise ValueError("Invalid email format.")
    
    user_input = ' '.join([
        data.get('name_of_the_sender', ''),
        email_address,
        data.get('message_subject', ''),
        body
    ]).strip().lower()
    
    regex = re.compile('[%s]' % re.escape(string.punctuation))
    clean_input = regex.sub('', user_input)
    clean_input = remove_stopwords(clean_input)
    
    processed_input = email_vectorizer.transform([clean_input])
    prediction = model_email.predict(processed_input)[0]
    prob = model_email.predict_proba(processed_input)[0][prediction]
    
    return {"prediction": int(prediction), "probability": float(prob)}


@shared_task
def predict_message(data):
    message_body = data.get('body')
    if not message_body:
        raise ValueError("Message body is required for model_2.")
    
    message_body_low = message_body.lower()
    regex = re.compile('[%s]' % re.escape(string.punctuation))
    clean_input = regex.sub('', message_body_low)
    clean_input = remove_stopwords(clean_input)
    
    processed_input = text_vectorizer.transform([clean_input])
    prediction = model_message.predict(processed_input)[0]
    prob = model_message.predict_proba(processed_input)[0][prediction]
    
    return {"prediction": int(prediction), "probability": float(prob)}


@shared_task
def predict_url(data):
    url_input = data.get('url')
    if not url_input:
        raise ValueError("This is not a URL! Please try again.")
    
    url_validator = URLValidator()
    try:
        url_validator(url_input)
    except ValidationError:
        raise ValueError("Invalid URL format.")
    
    clean_input = re.sub(r'^https?://', '', url_input)
    processed_input = url_vectorizer.transform([clean_input])
    
    prediction = model_url.predict(processed_input)[0]
    prob = model_url.predict_proba(processed_input)[0][prediction]
    
    return {"prediction": int(prediction), "probability": float(prob)}
