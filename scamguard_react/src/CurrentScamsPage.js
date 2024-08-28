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
        <div className="CurrentScamPage">
            {/* Side Menu */}
            <nav className="Side-menu">
                <ul>
                    <li><a href="#most-reported" onClick={() => scrollToSection(mostReportedRef)}>Current Most Reported Scams</a></li>
                    <li><a href="#top-loss" onClick={() => scrollToSection(topLossRef)}>Current Top Scams By Loss</a></li>
                    <li><a href="#popular-contact" onClick={() => scrollToSection(popularContactRef)}>Current Most Popular Contact Methods</a></li>
                </ul>
            </nav>

            {/* Introduction Section */}
            <header className="App-header">
                <h1>Top 3 Current Scams</h1>
                <p>Informing you of the most current scams in recent months to help you stay safe</p>
            </header>

            {/* Main Content */}
            <main>
                {/* Chart Section */}
                <section ref={mostReportedRef} id="most-reported" className="Chart-section">
                    {/* <h2>Current Most Reported Scams</h2> */}
                    <MostReportedScam />
                </section>
                <section ref={topLossRef} id="top-loss" className="Chart-section">
                    {/* <h2>Current Top Scams by Loss</h2> */}
                    <TopLossScam />
                </section>
                <section ref={popularContactRef} id="popular-contact" className="Chart-section">
                    {/* <h2>Current Most Popular Contact Methods</h2> */}
                    <PopularContactMethods />
                </section>
            </main>
        </div>
    );
};

export default CurrentScamsPage;
