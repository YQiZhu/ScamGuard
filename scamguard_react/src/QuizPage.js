import React, { useRef } from 'react';
import './QuizPage.css';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
    const navigate = useNavigate();

    return (
        <div className="QuizPage">
            <header className="quiz-header">
                <h1>Quiz Page</h1>
                <p>Test your knowledge against scams</p>
            </header>

            <main>
                <h2>Click on belows cards to start testing your scam identified knowledge</h2>
                <div className="quiz-cards">
                    <div className="quiz-card" onClick={() => navigate('/text-scams-quiz')}>
                        <img src={require('./images/text_scams_icon.png')} alt="Text Scams Icon" className="quiz-icon" />
                        <div className="quiz-text-btn">
                            <h2>Text Scams</h2>
                            <button className="quiz-button">Get started for text scams quiz!</button>
                        </div>
                    </div>

                    <div className="quiz-card" onClick={() => navigate('/email-scams-quiz')}>
                        <img src={require('./images/email_scams_icon.png')} alt="Email Scams Icon" className="quiz-icon" />
                        <div className="quiz-text-btn">
                            <h2>Email Scams</h2>
                            <button className="quiz-button">Get started for email scams quiz!</button>
                        </div>
                    </div>
                </div>

                <div className='quiz-page-img'>
                    <img src='/images/reallife_scenario/Seniors Using Social Media.png' alt="quiz page img" />
                </div>
            </main>
        </div>
    );
};

export default QuizPage;
