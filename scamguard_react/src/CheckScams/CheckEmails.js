import React, { useState } from 'react';
import axios from 'axios';
import './CheckEmails.css'; // Import the CSS file

const CheckEmails = ({ onSubmit }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [result, setResult] = useState(null); // State to store the result from the API

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data for the request
    const emailData = {
      name_of_the_sender: senderName,
      sender_email_address: senderEmail,
      message_subject: emailSubject,
      body: emailBody,
    };

    try {
      // Make the POST request to the Django API (model_1 endpoint)
      const response = await axios.post('https://scamguard.live/api/predict/model1/', emailData);

      // Handle the response
      setResult(response.data); // Store the response in state
      console.log('Predict Data:', response.data);
      alert("Prediction received! Check the result below.");

    } catch (error) {
      // Handle error (e.g., missing fields or invalid email)
      console.error("Error during the prediction:", error);
      alert("An error occurred while checking the email. Please try again.");
    }
  };

  return (
    <div>
      <form className="check-emails-form" onSubmit={handleSubmit}>
        <div className="check-emails-form-group">
          <label>Enter Sender Name</label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Click and type the Sender's name here..."
            className="input-field"
          />
        </div>

        <div className="check-emails-form-group">
          <label>Enter Sender Email Address</label>
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="Click and type the Sender's email address here..."
            className="input-field"
          />
        </div>

        <div className="check-emails-form-group">
          <label>Enter Email Subject</label>
          <input
            type="text"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            placeholder="Click and type the email's subject here..."
            className="input-field"
          />
        </div>

        <div className="check-emails-form-group">
          <label>Enter Email Body</label>
          <textarea
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            placeholder="Click and type the email's body here..."
            className="textarea-field"
          ></textarea>
        </div>

        <button className="submit-button" type="submit">Check If Scam</button>
      </form>

      {/* Display the result from the API */}
      {result && (
        <div className="result-section">
          <h3>Prediction Result:</h3>
          <p>Prediction: {result.prediction}</p>
        </div>
      )}
    </div>

  );
};

export default CheckEmails;
