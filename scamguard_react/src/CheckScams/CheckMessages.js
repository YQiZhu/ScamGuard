import React, { useState } from 'react';
import axios from 'axios';
import './CheckScams.css'; // Import the CSS file

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

    // Reset error if message Body is provided
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

  // Helper function to highlight the explanation words in the message body
  const highlightText = (text, explanationWords) => {
    if (!explanationWords || explanationWords.length === 0) {
      return text;
    }

    const words = text.split(' '); // Split message body by space
    return words.map((word, index) => {
      // Check if the word matches any explanation words
      const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase(); // Remove punctuation and make lowercase
      if (explanationWords.includes(cleanWord)) {
        return (
          <span key={index} className="check-scams-highlight">{word} </span> // Highlight the word
        );
      }
      return <span key={index}>{word} </span>; // Non-highlighted word
    });
  };

  const renderResultMessage = () => {
    if (!result) return null;

    const probability = (result.probability * 100).toFixed(2); // Convert to percentage and round to 2 decimal places
    const explanationWords = result.explanation.map(word => word.toLowerCase()); // Convert explanation words to lowercase

    if (result.prediction === 1) {
      return (
        <div className="result-section">
          <p className='result-section-p'>This message has a <strong>{probability}%</strong> chance of being a <strong style={{ color: 'red' }}>SCAM.</strong></p>
          <div className='result-section-highlight'>
            <p>Highlighted words: {highlightText(messageBody, explanationWords)}</p>
          </div>
          <p>Disclaimer: The model used is not 100% accurate and may return incorrect results. If you are unsure do not interact with the message. Please refer to <a href="/identifyScam" target="_blank">How to Identify Scams</a> to learn how to verify if a message or URL is a scam.</p>
        </div>
      );
    } else {
      return (
        <div className="result-section">
          <p className='result-section-p'>This message has a <strong>{probability}%</strong> chance of being <strong style={{ color: 'green' }}>LEGITIMATE</strong>.</p>
          <div className='result-section-highlight'>
            <p>Highlighted words: {highlightText(messageBody, explanationWords)}</p>
          </div>
          <p>Disclaimer: The model used is not 100% accurate and may return incorrect results. If you are unsure do not interact with the message. Please refer to <a href="/identifyScam" target="_blank">How to Identify Scams</a> to learn how to verify if a message or URL is a scam.</p>
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
    <div className="ScamDetectorPage">
      <form className="check-scams-form" onSubmit={handleSubmit}>

        <div className="check-scams-form-group">
          <label>Enter Message Body (required)</label>
          <textarea
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            placeholder="Click and type the message's body here..."
            className="textarea-field"
          ></textarea>
        </div>

        {/* Error message for missing message body */}
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
