import React, { useState } from 'react';
import axios from 'axios';
import './CheckEmails.css'; // Import the CSS file

const CheckMessages = () => {
  const [messageBody, setMessageBody] = useState('');
  const [result, setResult] = useState(null); // State to store the result from the API
  const [error, setError] = useState(''); // State for error message
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if messageBody is empty
    if (!messageBody) {
      setError("Message body is required.");
      return;
    }

    // Reset error if emailBody is provided
    setError('');

    // Set loading to true when sending data
    setLoading(true);

    // Prepare the data for the request
    const messageData = {
      body: messageBody,
    };

    axios.post('https://scamguard.live/api/predict/message/', messageData)
      .then((response) => {
        // Handle the response
        setResult(response.data); // Store the response in state
        setLoading(false);
        console.log('Predict Data:', response.data);
        // alert("Prediction received! Check the result below.");
      })
      .catch((error) => {
        // Handle error (e.g., missing fields or invalid Message)
        setLoading(false);
        console.error("Error during the prediction:", error);
        alert("An error occurred while checking the Message. Please try again.");
      });
  };

  const renderResultMessage = () => {
    if (!result) return null;

    const probability = (result.probability * 100).toFixed(2); // Convert to percentage and round to 2 decimal places
    if (result.prediction === 1) {
      return (
        <div className="result-section">
          <p>This message has a <strong>{probability}%</strong> chance of being a <strong style={{ color: 'red' }}>SCAM.</strong></p>
        </div>
      );
    } else {
      return (
        <div className="result-section">
          <p>This message has a <strong>{probability}%</strong> chance of being <strong style={{ color: 'green' }}>LEGITIMATE</strong>.</p>
        </div>
      );
    }
  };

  const cleanInputField = (e) => {
    e.preventDefault(); // Prevent form submission
    setMessageBody('');
    setResult(null); // Clear the result
    setError(''); // Clear the error message if any
  }

  return (
    <div>
      <form className="check-emails-form" onSubmit={handleSubmit}>

        <div className="check-emails-form-group">
          <label>Enter Message Body (required)</label>
          <textarea
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            placeholder="Click and type the message's body here..."
            className="textarea-field"
          ></textarea>
        </div>

        {/* Error message for missing email body */}
        {error && <p className="check-scam-error-message">{error}</p>}

        <div className='scam-detector-btn-group'>
          <button className="submit-button" type="submit">Check If Scam</button>
          <button className="clear-button" onClick={cleanInputField}>Clear Input</button>
        </div>
      </form>

      {loading && <div className="check-scam-loading">Loading ...</div>}
      {/* Display the result from the API */}
      {!loading && renderResultMessage()}
    </div>

  );
};

export default CheckMessages;
