import React, { useState } from 'react';
import axios from 'axios';
import './CheckEmails.css'; // Import the CSS file

const CheckURLs = ({ onSubmit }) => {
  const [urlBody, setURLBody] = useState('');
  const [result, setResult] = useState(null); // State to store the result from the API
  const [error, setError] = useState(''); // State for error URL
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if URLBody is empty
    if (!urlBody) {
      setError("URL is required.");
      return;
    }

    // Reset error if emailBody is provided
    setError('');

    // Set loading to true when sending data
    setLoading(true);

    // Prepare the data for the request
    const urlData = {
      url: urlBody,
    };

    axios.post('https://scamguard.live/api/predict/url/', urlData)
      .then((response) => {
        // Handle the response
        setResult(response.data); // Store the response in state
        setLoading(false);
        console.log('Predict Data:', response.data);
        // alert("Prediction received! Check the result below.");
      })
      .catch((error) => {
        // Handle error (e.g., missing fields or invalid url)
        setLoading(false);
        console.error("Error during the prediction:", error);
        alert("An error occurred while checking the URL. Please try again.");
      });
  };

  const renderResultURL = () => {
    if (!result) return null;

    const probability = (result.probability * 100).toFixed(2); // Convert to percentage and round to 2 decimal places
    if (result.prediction === 1) {
      return (
        <div className="result-section">
          <h1 style={{ color: 'red' }}>SCAM</h1>
          <p>This url has a {probability}% chance of being a SCAM.</p>
        </div>
      );
    } else {
      const notScamProbability = (100 - result.probability * 100).toFixed(2); // Calculate the inverse probability
      return (
        <div className="result-section">
          <h1 style={{ color: 'green' }}>NOT SCAM</h1>
          <p>This url has a {probability}% chance of being legitimate.</p>
        </div>
      );
    }
  };

  return (
    <div>
      <form className="check-emails-form" onSubmit={handleSubmit}>

        <div className="check-emails-form-group">
          <label>Enter URL in below field (required)</label>
          <textarea
            value={urlBody}
            onChange={(e) => setURLBody(e.target.value)}
            placeholder="Click and type the url body here..."
            className="textarea-field"
          ></textarea>
        </div>

        {/* Error url for missing email body */}
        {error && <p className="check-scam-error-message">{error}</p>}

        <button className="submit-button" type="submit">Check If Scam</button>
      </form>

      {loading && <div className="check-scam-loading">Loading ...</div>}
      {/* Display the result from the API */}
      {renderResultURL()}
    </div>

  );
};

export default CheckURLs;