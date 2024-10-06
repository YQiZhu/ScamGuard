import React, { useState } from 'react';
import axios from 'axios';
import './CheckScams.css'; // Import the CSS file

const CheckURLs = () => {
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

        // Ensure the URL includes http:// or https://
        let formattedURL = urlBody.trim();
        if (!formattedURL.startsWith('http://') && !formattedURL.startsWith('https://')) {
            formattedURL = 'https://' + formattedURL;  // Default to https if no protocol is provided
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
                    <p>This url has a <strong>{probability}%</strong> chance of being a <strong style={{ color: 'red' }}>SCAM.</strong></p>
                    <p>Disclaimer: The model used is not 100% and may return incorrect results. If you are unsure do not interact with the message. Please refer to <a href="/identifyScam" target="_blank">How to Identify Scams</a> to learn how to verify if a message or URL is a scam.</p>
                </div>
            );
        } else {
            return (
                <div className="result-section">
                    <p>This url has a <strong>{probability}%</strong> chance of being <strong style={{ color: 'green' }}>LEGITIMATE</strong>.</p>
                    <p>Disclaimer: The model used is not 100% and may return incorrect results. If you are unsure do not interact with the message. Please refer to <a href="/identifyScam" target="_blank">How to Identify Scams</a> to learn how to verify if a message or URL is a scam.</p>
                </div>
            );
        }
    };

    const cleanInputField = (e) => {
        e.preventDefault(); // Prevent form submission
        setURLBody('');
        setResult(null); // Clear the result
        setError(''); // Clear the error message if any
    }

    return (
        <div className="ScamDetectorPage"> 
            <form className="check-scams-form" onSubmit={handleSubmit}>

                <div className="check-scams-form-group">
                    <label>Enter URL with 'https://' or 'http://' header (required)</label>
                    <textarea
                        value={urlBody}
                        onChange={(e) => setURLBody(e.target.value)}
                        placeholder="Click and type the url body here..."
                        className="textarea-field"
                    ></textarea>
                </div>

                {/* Error url for missing urls body */}
                {error && <p className="check-scam-error-message">{error}</p>}
                <div className='scam-detector-btn-group'>
                    <button className="submit-button" type="submit">Check If Scam</button>
                    <button className="clear-button" onClick={cleanInputField}>Clear Input</button>
                </div>
            </form>

            {loading && <div className="check-scam-loading">Loading ...</div>}
            {/* Display the result from the API */}
            {!loading && renderResultURL()}
        </div>

    );
};

export default CheckURLs;
