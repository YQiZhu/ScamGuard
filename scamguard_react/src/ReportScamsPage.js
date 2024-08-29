import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './IdentifyScamsPage.css';

const ReportScamsPage = () => {
    const navigate = useNavigate();

    // // Create a reference to the section
    // const phoneScamsRef = useRef(null);
    // const emailScamsRef = useRef(null);
    // const romanceScamsRef = useRef(null);

    // // Function to scroll to the section
    // const scrollToSection = (ref) => {
    //     ref.current?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div className="IdentifyScamsPage">
            {/* Side Menu */}
            {/* <nav className="Side-menu">
                <ul>
                    <li><a href="#most-reported" onClick={() => scrollToSection(mostReportedRef)}>Current Most Reported Scams</a></li>
                    <li><a href="#top-loss" onClick={() => scrollToSection(topLossRef)}>Current Top Scams By Loss</a></li>
                    <li><a href="#popular-contact" onClick={() => scrollToSection(popularContactRef)}>Current Most Popular Contact Methods</a></li>
                </ul>
            </nav> */}

            {/* Introduction Section */}
            <header className="indentify-scams-header">
                <h1>How to Report Scams</h1>
                <p></p>
            </header>

            
        </div>
    );
};

export default ReportScamsPage;
