// src/components/TextSelector.js
import React from 'react';
// import { scamOptions } from '../data/scams';

const TextSelector = ({ selectedTexts, setSelectedTexts }) => {

    // src/data/scams.js
    const scamOptions = [
        { id: 'phone_scams', label: 'Phone Scams' },
        { id: 'email_scams', label: 'Email Scams' },
        { id: 'online_shopping_fraud', label: 'Online Shopping Fraud' },
        { id: 'investment_scams', label: 'Investment Scams' },
        { id: 'romance_scams', label: 'Romance Scams' },
        // Add more as needed
    ];

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedTexts([...selectedTexts, value]);
        } else {
            setSelectedTexts(selectedTexts.filter(text => text !== value));
        }
    };

    return (
        <div>
            <h2>Select Relevant Scams</h2>
            <form>
                {scamOptions.map(scam => (
                    <div key={scam.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={scam.label}
                                checked={selectedTexts.includes(scam.label)}
                                onChange={handleChange}
                            />
                            {scam.label}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default TextSelector;
