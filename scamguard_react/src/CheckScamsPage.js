import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckScamsPage.css';
import CheckEmails from './CheckScams/CheckEmails';
import CheckMessages from './CheckScams/CheckMessages';
import CheckURLs from './CheckScams/CheckURLs';

const CheckScamsPage = () => {

    const [selectedType, setSelectedType] = useState('email');

    const navigate = useNavigate();

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
                        {selectedType === 'email' && <CheckEmails />}
                        {selectedType === 'message' && <CheckMessages />}
                        {selectedType === 'url' && <CheckURLs />}
                    </div>
                </div>
            </main>

            <footer className='check-scams-footer-container'>
                <div className='check-scams-footer'>
                    <h2>What's Next?</h2>
                    <div className='check-scams-footer-btn-group'>
                        <button
                            onClick={() => navigate('/reportScam')}
                        >
                            Report scams
                        </button>
                        <button
                            onClick={() => navigate('/identifyScam')}
                        >
                            Learn more about scams
                        </button>
                        <button
                            onClick={() => navigate('/wordCloud')}
                        >
                            Learn more about scam language
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CheckScamsPage;
