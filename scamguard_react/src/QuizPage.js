import React, { useRef } from 'react';
import './QuizPage.css';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
    const navigate = useNavigate();

    return (
        <div className="QuizPage">
            {/* Introduction Section */}
            <header className="quiz-header">
                <h1>Quiz Page</h1>
                <p>Test your knowledge against scam</p>
            </header>

            {/* Main Content */}
            <main>
                <button onClick={() => navigate('/text-scams-quiz')}>Get Started</button>
            </main>
        </div>
    );
};

export default QuizPage;
