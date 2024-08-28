import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneScams from './IdentifyScams/PhoneScams';
import EmailScams from './IdentifyScams/EmailScams';
import RomanceScams from './IdentifyScams/RomanceScams';
import './IdentifyScamsPage.css';

const IdentifyScamsPage = () => {
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
            <header className="App-header">
                <h1>How to Identify Scams</h1>
                <p></p>
            </header>

            {/* Clickable Box Section */}
            <div
                className="clickable-box"
                onClick={() => navigate('/phone-scams')}
            >
                <img
                    src={require('./images/phone_scams_icon.png')}
                    alt="Phone Scams"
                />
                <div className="text-content">
                    <h3>Phone Scams</h3>
                    <p>
                        Click on Card to find out more information/example about how Phone Scams work and how to identify them.
                    </p>
                </div>
                <div className="arrow">
                    &gt;
                </div>
            </div>
        </div>
    );
};

export default IdentifyScamsPage;
