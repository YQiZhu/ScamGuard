import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MostReportedScam from './CurrentScams/MostReportedScam';
import TopLossScam from './CurrentScams/TopLossScam';
import PopularContactMethods from './CurrentScams/PopularContactMethods';
import './CurrentScamsPage.css';

const CurrentScamsPage = () => {
    // Create a reference to the section
    const mostReportedRef = useRef(null);
    const topLossRef = useRef(null);
    const popularContactRef = useRef(null);

    const navigate = useNavigate();

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 60, // Adjust 80px above the element
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="CurrentScamsPage">
            {/* Side Menu */}
            <nav className="Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><span onClick={() => scrollToSection(mostReportedRef)}>Current Most Reported Scams</span></li>
                    <li><span onClick={() => scrollToSection(topLossRef)}>Current Top Scams By Loss</span></li>
                    <li><span onClick={() => scrollToSection(popularContactRef)}>Current Most Popular Contact Methods</span></li>
                </ul>
            </nav>

            {/* Introduction Section */}
            <header className="current-scam-header">
                <h1>Top 3 Current Scams</h1>
                <p>Informing you of the most current scams in recent months to help you stay safe</p>
            </header>

            {/* Main Content */}
            <main>
                {/* Chart Section */}
                <section className="most-reported-section" ref={mostReportedRef}>
                    {/* <h2>Current Most Reported Scams</h2> */}
                    <MostReportedScam />
                </section>
                <section className="top-loss-section" ref={topLossRef}>
                    {/* <h2>Current Top Scams by Loss</h2> */}
                    <TopLossScam />
                </section>
                <section className="popular-contact-section" ref={popularContactRef}>
                    {/* <h2>Current Most Popular Contact Methods</h2> */}
                    <PopularContactMethods />
                </section>
            </main>
            <p>
                Data obtained from <a href="https://www.scamwatch.gov.au/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Scamwatch</a> © <a href="https://au.creativecommons.net/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Commonwealth of Australia</a>
            </p>
            <footer className='current-scams-footer-container'>
                <div className='current-scams-footer'>
                    <h2>What's Next?</h2>
                    <div className='current-scams-footer-btn-group'>
                        <button
                            onClick={() => navigate('/identifyScam')}
                        >
                            Learn more about scams
                        </button>
                        <button
                            onClick={() => navigate('/riskAssessment')}
                        >
                            Check your risk assessment
                        </button>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default CurrentScamsPage;
