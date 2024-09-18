from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse


class PredictAPITest(TestCase):
    def setUp(self):
        """
        Before each test, initialize APIClient and set up the basic environment for the test
        """
        self.client = APIClient()

    def test_predict_model1(self):
        """
        Test the interface for prediction using model_1
        """
        url = reverse('predict_model_1')  # Find API paths through named routes
        data = {
            "name_of_the_sender": "John Doe",
            "sender_email_address": "john.doe@example.com",
            "message_subject": "Test Subject",
            "body": "This is a test message."
        }
        # Simulate sending a POST request to the predict interface
        response = self.client.post(url, data, format='json')

        # Check if the response status code is 200, indicating success
        self.assertEqual(response.status_code, 200)

        # Confirm that the response contains the prediction results
        self.assertIn('prediction', response.data)

    def test_missing_fields_in_model1(self):
        """
        The model_1 interface should return an error when testing for missing fields
        """
        url = reverse('predict_model_1')
        # Missing message_subject and body fields
        data = {
            "name_of_the_sender": "John Doe",
            "sender_email_address": "john.doe@example.com",
        }
        response = self.client.post(url, data, format='json')

        # Check if a 400 error is returned, indicating a problem with the request
        self.assertEqual(response.status_code, 400)

        # Check if an error message is returned for missing fields
        self.assertIn('error', response.data)
        self.assertEqual(response.data['error'], "Missing required fields: message_subject, body")

    def test_predict_model2(self):
        """
        Test the interface for prediction using model_2
        """
        url = reverse('predict_model_2')  # Get the API path of model_2
        data = {
            "body": "This is the message body for model_2."
        }
        response = self.client.post(url, data, format='json')

        # Check if the response status code is 200, indicating success
        self.assertEqual(response.status_code, 200)

        # Confirm that the response contains the prediction results
        self.assertIn('prediction', response.data)

    def test_missing_body_in_model2(self):
        """
        The model_2 interface should return an error when testing for missing body fields
        """
        url = reverse('predict_model_2')
        # No "body" field is provided
        data = {

        }
        response = self.client.post(url, data, format='json')

        # Check if a 400 error is returned, indicating a problem with the request
        self.assertEqual(response.status_code, 400)

        # Check if an error message is returned that lacks a body
        self.assertIn('error', response.data)
        self.assertEqual(response.data['error'], "Message body is required for model_2")


