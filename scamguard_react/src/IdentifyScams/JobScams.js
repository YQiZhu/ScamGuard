import React, { useRef, useEffect, useState } from 'react';
import './TypeOfScams.css';
import { useNavigate } from 'react-router-dom';

function JobScams() {

    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/job-ad-scam-it-worker-loses-150k/9486e365-d56c-4855-bdd0-9fe640ae3aae'; // Replace with the desired URL
    };

    const navigate = useNavigate();

    // Function to go back to the previous page
    const goBack = () => {
        // navigate(-1); // This will navigate back to the previous page
        navigate('/identifyScam')
    };

    // Create a reference to the section
    const scamIdentificationRef = useRef(null);
    const protectYourselfRef = useRef(null);
    const realLifeStoryRef = useRef(null);

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 60, // Adjust above the element
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="Scams-Page">

            {/* Side Menu */}
            <nav className="Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><span onClick={() => scrollToSection(scamIdentificationRef)}>How to Identify a Job Scam</span></li>
                    <li><span onClick={() => scrollToSection(protectYourselfRef)}>How to Protect Yourself</span></li>
                    <li><span onClick={() => scrollToSection(realLifeStoryRef)}>Real Life Story</span></li>
                </ul>
            </nav>

            <header className="scams-header">
                <button onClick={goBack}>Back to Previous Page</button>
                <h2>Job Scams</h2>
                {/* <p>Job or employment scams target job seekers with fake job listings or interviews, aiming to steal personal information or money. Scammers may post seemingly legitimate job ads and then ask applicants to pay fees for background checks, training, or equipment. They may also conduct fake interviews to make the scam seem more authentic. Red flags include requests for upfront payments, sharing of personal financial information before hiring, and job offers that seem too good to be true. It's important to verify the legitimacy of job offers and be cautious throughout the hiring process.</p> */}
            </header>
            {/* How to Identify a Scam Section */}
            <section className="scam-identification" ref={scamIdentificationRef}>
                <h3>How to Identify a Job Scam</h3>
                <p>
                    It is likely that you are encountering a job scam if:
                    <ul>
                        <li>The job offer is made through an unsolicited message</li>
                        <li>You are told you can earn a high income with little effort while working from home</li>
                        <li>The hiring process is very quick with no interview and without asking for references</li>
                        <li>Personal information such as bank account details are requested before you are hired</li>
                        <li>You are required to pay a recruitment fee or pay for training materials</li>
                        <li>The job requires you to enrol new recruits</li>
                        <li>You are told to top up an account with your own money to complete your job</li>
                    </ul>
                </p>
                <h4>Example</h4>
                <div className="scam-example-img-container">
                    <img src="/images/Employment_example.png" alt="Employment example" className="example-image"
                    />
                </div>
                <p>
                    Signs this is a scam:
                    <ul>
                        <li>Unsolicited message</li>
                        <li>Claims you can earn money quickly and with little effort</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself" ref={protectYourselfRef}>
                <div className="protect-yourself-contain">
                    <h3>How to Protect Yourself</h3>
                    <p>
                        <ul>
                            <li>Don’t trust that a job ad is real just because it appears on a trusted platform</li>
                            <li>Never send money or provide personal information to anyone you have only met online</li>
                            <li>Never send identity documents unless you are certain the organisation is genuine</li>
                            <li>Never accept payments or rewards to recruit other people</li>
                            <li>Independently verify the identities of anyone who has reached out to you, checking for contact details from the organisation’s official website</li>
                            <li>Search for reviews of the company</li>
                        </ul>
                    </p>
                </div>
            </section>
            {/* Real-Life Story Section */}
            <section className="real-life-story" ref={realLifeStoryRef}>
                <h3>Real-Life Story</h3>
                <h4>Cybersecurity Expert Loses $150,000 to Sophisticated Job Scam</h4> {/* Story Title */}
                <img src="images/Jobscamrealstory.jpeg" alt="Job scam real story" className="example-image"
                    style={{
                        maxWidth: '450px'
                    }} />
                <p>
                    A Sydney cybersecurity expert, "Josh" (name changed), lost $150,000 of his and his parents' savings to a job scam. Despite having a degree in cybersecurity, Josh was tricked by a fake job ad on Instagram that led him to a WhatsApp chat, where scammers convinced him to transfer money to receive commissions for online tasks. Over three days, Josh was manipulated into draining his savings and even his parents' accounts. He realised it was a scam only after losing everything. The experience left him diagnosed with depression, and he now calls for greater accountability from social media platforms in verifying job ads to prevent such scams.
                </p>


                {/* Clickable Box with URL Link */}
                <button onClick={goToOtherPage}>Read the Full Story</button>
            </section>

            <footer className='identify-scams-footer-container'>
                <div className='identify-scams-footer'>
                    <h2>What's Next?</h2>
                    <div className='identify-scams-footer-btn-group'>
                        <button
                            onClick={() => navigate('/identifyScam')}
                        >
                            Learn more about scams
                        </button>
                        <button
                            onClick={() => navigate('/quiz')}
                        >
                            Test you knowledge
                        </button>
                        <button
                            onClick={() => navigate('/posterGenerator')}
                        >
                            Generate a poster
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default JobScams;
