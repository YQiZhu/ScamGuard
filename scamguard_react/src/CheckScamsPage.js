import React, { useState } from 'react';
import './CheckScamsPage.css';
import CheckEmails from './CheckScams/CheckEmails';
// import CheckMessages from './CheckScams/CheckMessages'; 
// import CheckURLs from './CheckScams/CheckURLs';

const CheckScamsPage = () => {

    const [selectedType, setSelectedType] = useState('email');
    const [result, setResult] = useState(null);

    const handleSubmit = async (data) => {
        try {
            // Replace this with the actual API endpoint hosted on your Django EC2
            const response = await fetch('http://your-ec2-url.com/api/checkscam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, type: selectedType }),
            });
            const resultData = await response.json();
            setResult(resultData.message); // Assuming your API returns a message
        } catch (error) {
            console.error("Error submitting the form: ", error);
        }
    };

    return (
        <div className="CheckScamsPage">
            {/* Introduction Section */}
            <header className="check-scam-header">
                <h1>Check if the message are Scams</h1>
                <p>Use well trained model to detect if those messages you received are scams or not</p>
            </header>

            {/* Main Content */}
            <main>
                <div className="scam-checker">
                    <div className="scam-checker-selection">
                        <h3>Select the text type you want to check in below</h3>
                        <div className="scam-checker-segmented-control">
                            <button
                                className={selectedType === 'email' ? 'segment-btn selected' : 'segment-btn'}
                                onClick={() => setSelectedType('email')}
                            >
                                Email
                            </button>
                            <button
                                className={selectedType === 'message' ? 'segment-btn selected' : 'segment-btn'}
                                onClick={() => setSelectedType('message')}
                            >
                                Message
                            </button>
                            <button
                                className={selectedType === 'url' ? 'segment-btn selected' : 'segment-btn'}
                                onClick={() => setSelectedType('url')}
                            >
                                URL
                            </button>
                        </div>
                    </div>
                    <div className="scam-checker-component">
                        {selectedType === 'email' && <CheckEmails onSubmit={handleSubmit} />}
                        {/* {selectedType === 'message' && <CheckMessages onSubmit={handleSubmit} />} */}
                        {/* {selectedType === 'url' && <CheckURLs onSubmit={handleSubmit} />} */}
                    </div>

                    {result && (
                        <div>
                            <h3>Result: {result}</h3>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
};

export default CheckScamsPage;
