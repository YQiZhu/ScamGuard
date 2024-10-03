// ./src/WordCloudPage.js
import React from 'react';
import WordCloudComponent from './WordCloud';
import { useNavigate } from 'react-router-dom';
import './WordCloudPage.css';

const WordCloudPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // This will navigate back to the previous page
    };

    return (
        <div className='WordCloudPage'>
            <header className='wordCloud-header'>
                <button onClick={goBack}>Back to Pervious Page</button>
                <h1>Scam Categories Word Cloud</h1>
            </header>
            <div className='wordCloud-session'>
                <WordCloudComponent />
            </div>
        </div>
    );
};

export default WordCloudPage;
