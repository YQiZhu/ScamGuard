import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
            <header className="indentify-scams-header">
                <h1>How to Identify Scams</h1>
                <p>
                    <strong>Click</strong> on Card to find out more information/example about how different Scams works and how to identify them.
                </p>
            </header>

            {/* Clickable Box Section */}
            {/* Text Scams */}
            <div className="scams-container">
                <div
                    className="clickable-box"
                    onClick={() => navigate('/text-scams')}
                >

                    <div className="text-content">
                        <h3>Text Scams</h3>
                        <img
                            src={require('./images/text_scams_icon.png')}
                            alt="Text Scams"
                        />
                    </div>
                </div>
                {/* Phone Scams */}

                <div
                    className="clickable-box"
                    onClick={() => navigate('/phone-scams')}
                >

                    <div className="text-content">
                        <h3>Phone Scams</h3>
                        <img
                            src={require('./images/phone_scams_icon.png')}
                            alt="Phone Scams"
                        />
                    </div>
                </div>
                {/* Email Scams */}

                <div
                    className="clickable-box"
                    onClick={() => navigate('/email-scams')}
                >
                    <div className="text-content">
                        <h3>Email Scams</h3>
                        <img
                            src={require('./images/email_scams_icon.png')}
                            alt="Email Scams"
                        />
                    </div>
                </div>
                {/* Social Media Scams */}
                <div
                    className="clickable-box"
                    onClick={() => navigate('/social-media-scams')}
                >

                    <div className="text-content">
                        <h3>Social Media Scams</h3>
                        <img
                            src={require('./images/social_media_scams_icon.png')}
                            alt="Social Media Scams"
                        />
                    </div>
                </div>
                {/* Website Scams */}
                <div
                    className="clickable-box"
                    onClick={() => navigate('/website-scams')}
                >

                    <div className="text-content">
                        <h3>Website Scams</h3>
                        <img
                            src={require('./images/website_scams_icon.png')}
                            alt="Website Scams"
                        />
                    </div>
                </div>
                {/* Romance Scams */}
                <div
                    className="clickable-box"
                    onClick={() => navigate('/romance-scams')}
                >
                    <div className="text-content">
                        <h3>Romance Scams</h3>
                        <img
                            src={require('./images/romance_scams_icon.png')}
                            alt="Romance Scams"
                        />
                    </div>
                </div>

                {/* Investment Scams */}
                <div
                    className="clickable-box"
                    onClick={() => navigate('/investment-scams')}
                >
                    <div className="text-content">
                        <h3>Investment Scams</h3>
                        <img
                            src={require('./images/investment_scam.png')}
                            alt="Investment Scams"
                            className="icon"
                        />
                    </div>
                </div>

                {/* Product And Service Scams */}
                <div
                    className="clickable-box"
                    onClick={() => navigate('/product-and-service-scams')}
                >

                    <div className="text-content">
                        <h3>Product And Service Scams</h3>
                        <img
                            src={require('./images/product.png')}
                            alt="Product And Service Scams"
                        />
                    </div>
                </div>

                {/* Job Scams */}
                <div
                    className="clickable-box"
                    onClick={() => navigate('/job-scams')}
                >

                    <div className="text-content">
                        <h3>Job Scams</h3>
                        <img
                            src={require('./images/job_scam.jpg')}
                            alt="Job Scams"
                        />
                    </div>
                </div>

                {/* Impersonation Scams */}
                <div
                    className="clickable-box"
                    onClick={() => navigate('/impersonation-scams')}
                >
                    <div className="text-content">
                        <h3>Impersonation Scams</h3>
                        <img
                            src={require('./images/impersonation_scams_icon.png')}
                            alt="Impersonation Scams"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdentifyScamsPage;
