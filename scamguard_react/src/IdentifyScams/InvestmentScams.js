import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TypeOfScams.css';

function InvestmentScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/scams-australia-queensland-man-loses-500k-retirement-savings-to-investment-scam/0ee978a5-6874-4dab-b517-d6ca5da3bc98'; // Replace with the desired URL
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
                    <li><span onClick={() => scrollToSection(scamIdentificationRef)}>How to Identify an Investment Scam</span></li>
                    <li><span onClick={() => scrollToSection(protectYourselfRef)}>How to Protect Yourself</span></li>
                    <li><span onClick={() => scrollToSection(realLifeStoryRef)}>Real Life Story</span></li>
                </ul>
            </nav>

            <header className="scams-header">
                <button onClick={goBack}>Back to Previous Page</button>
                <h2>Investment Scams</h2>
                {/* <p>Investment scams entice people with promises of high returns and low risk, often using persuasive tactics and fake credentials to appear legitimate. Scammers may reach out through phone calls, emails, or social media, pressuring victims to invest quickly. Common scams include Ponzi schemes, where new investors' money is used to pay earlier investors, creating the illusion of profitability. It's crucial to research thoroughly and be skeptical of any investment opportunity that seems too good to be true.</p> */}
            </header>
            {/* How to Identify a Scam Section */}
            <section className="scam-identification" ref={scamIdentificationRef}>
                <h3>How to Identify an Investment Scam</h3>
                <p>
                    It is likely that you are encountering an investment scam if:
                    <ul>
                        <li>They promise a low or no risk investment which will provide high returns</li>
                        <li>They claim a well-known figure recommends the investment</li>
                        <li>They make contact through an unsolicited message</li>
                        <li>They request remote access to your device to set up accounts and make transactions</li>
                        <li>They request payment in cryptocurrency</li>
                        <li>The “adviser” who is helping you does not have an Australian financial services licence</li>
                    </ul>
                </p>
                <p>
                    Deepfakes are becoming a more common tool used by scammers. They are often used to create fake celebrity videos where they promote an investment.
                    Signs that a video is a deepfake include:
                    <ul>
                        <li>The person speaking with unusual pauses, odd pitches or different accents</li>
                        <li>Mouth movements not matching what the person is saying</li>
                        <li>Facial expressions and movements don’t match the speaker’s tone</li>
                    </ul>
                </p>
                <h4>Examples</h4>
                <div className="scam-example-img-container">
                    <img src="/images/Investment_example.png" alt="Investment example" className="example-image"
                        style={{
                            maxWidth: '400px'
                        }} />
                </div>
                <p>
                    Signs this is a scam:
                    <ul>
                        <li>Unsolicited message</li>
                        <li>Promising easy method to make high returns</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself" ref={protectYourselfRef}>
                <div className="protect-yourself-contain">
                    <h3>How to Protect Yourself</h3>
                    <p>
                        <ul>
                            <li>Do your due diligence
                                <ul>
                                    <li>Search company on <a href="https://moneysmart.gov.au/check-and-report-scams/investor-alert-list" target="_blank" rel="noopener noreferrer">ASIC’s investor alert list</a></li>
                                    <li>Check that a person has an Australian financial services licence using the <a href="https://moneysmart.gov.au/financial-advice/financial-advisers-register" target="_blank" rel="noopener noreferrer">financial adviser’s register</a></li>
                                </ul>
                            </li>
                            <li>Search for reviews about the investment on independent websites and search the investment name with the word ‘scam’</li>
                            <li>Check that the person you are dealing with belongs to the organisation they claim to work for using contact details you have found yourself</li>
                            <li>Get independent legal advice or financial advice from a financial advisor with an Australian financial services licence</li>
                            <li>Look up the domain age using <a href="https://whois.domaintools.com/" target="_blank" rel="noopener noreferrer">Whois Lookup</a>
                                <ul>
                                    <li>If a website has not been active for long it is more likely to be a fake website</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
            </section>

            {/* Real-Life Story Section */}
            <section className="real-life-story" ref={realLifeStoryRef}>
                <h3>Real-Life Story</h3>
                <h4>Queensland Man Loses $500K in Retirement Savings to Sophisticated Investment Scam</h4> {/* Story Title */}
                <img src="/images/Investmentrealstory.jpeg" alt="Investment real story" className="example-image" />
                <p>
                    A 66-year-old Queensland man, referred to as Ben, lost $500,000 of his retirement savings to a "sophisticated and socially engineered" investment scam. The scam began when Ben, grieving the loss of his wife, engaged with what he believed to be a legitimate investment firm on Facebook. The scammers created a fake investment account, showing false financial growth to lure Ben into transferring his savings over several months. Despite warnings from his bank and a scam prevention agency, Ben continued with the investment until it was too late to recover his funds. The incident highlights the emotional and financial devastation caused by such scams, especially targeting vulnerable individuals. Ben hopes sharing his story will prevent others from making similar mistakes.
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

export default InvestmentScams;
