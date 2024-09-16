import React, { useRef } from 'react';
import MostReportedScam from './CurrentScams/MostReportedScam';
import TopLossScam from './CurrentScams/TopLossScam';
import PopularContactMethods from './CurrentScams/PopularContactMethods';
import './CurrentScamsPage.css';

const CurrentScamsPage = () => {
    // Create a reference to the section
    const mostReportedRef = useRef(null);
    const topLossRef = useRef(null);
    const popularContactRef = useRef(null);

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="CurrentScamsPage">
            {/* Side Menu */}
            <nav className="Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><a href="#most-reported" onClick={() => scrollToSection(mostReportedRef)}>Current Most Reported Scams</a></li>
                    <li><a href="#top-loss" onClick={() => scrollToSection(topLossRef)}>Current Top Scams By Loss</a></li>
                    <li><a href="#popular-contact" onClick={() => scrollToSection(popularContactRef)}>Current Most Popular Contact Methods</a></li>
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
                <section className="most-reported-section" ref={mostReportedRef} id="most-reported">
                    {/* <h2>Current Most Reported Scams</h2> */}
                    <MostReportedScam />
                </section>
                <section className="top-loss-section" ref={topLossRef} id="top-loss">
                    {/* <h2>Current Top Scams by Loss</h2> */}
                    <TopLossScam />
                </section>
                <section className="popular-contact-section" ref={popularContactRef} id="popular-contact">
                    {/* <h2>Current Most Popular Contact Methods</h2> */}
                    <PopularContactMethods />
                </section>
            </main>
            <p>
                Data obtained from <a href="https://www.scamwatch.gov.au/" target="_blank" rel="noopener noreferrer" style={{  textDecoration: 'none' }}>Scamwatch</a> © <a href="https://au.creativecommons.net/" target="_blank" rel="noopener noreferrer" style={{  textDecoration: 'none' }}>Commonwealth of Australia</a>
            </p>
        </div>
    );
};

export default CurrentScamsPage;
