import React, { useRef } from 'react';
import './TypeOfScams.css';
import { useNavigate } from 'react-router-dom';

function EmailScams() {

    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/netflix-scam-email-claims-you-overpaid-your-bill-and-are-entitled-to-a-refund/b4597579-73ba-4d77-8501-f64ddc516a40'; // Replace with the desired URL
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
                    <li><span onClick={() => scrollToSection(scamIdentificationRef)}>How to Identify an Email Scam</span></li>
                    <li><span onClick={() => scrollToSection(protectYourselfRef)}>How to Protect Yourself</span></li>
                    <li><span onClick={() => scrollToSection(realLifeStoryRef)}>Real Life Story</span></li>
                </ul>
            </nav>

            <header className="scams-header">
                <button onClick={goBack}>Back to Previous Page</button>
                <h2>Email Scams</h2>
                {/* <p>Email scams, often disguised as legitimate communications, use urgent or alarming messages to trick recipients into clicking on links or opening attachments. These emails may mimic messages from reputable companies or government agencies and aim to steal personal information, such as login credentials or bank account details. Some scams also install malware on the victim's device, compromising their security. It's essential to be cautious with emails from unknown senders and use spam filters to minimise risk.</p> */}
            </header>
            {/* How to Identify a Scam Section */}
            <section className="scam-identification" ref={scamIdentificationRef}>
                <h3>How to Identify an Email Scam</h3>
                <p>
                    <ul>
                        <li>Includes generic greetings</li>
                        <li>Claims to be from an organisation but the email address does not match
                            <ul>
                                <li>For example, it is a free webmail address (gmail, outlook) or the organisation’s name is misspelt</li>
                            </ul>
                        </li>
                        <li>Includes a link that does not match the URL it goes to
                            <ul>
                                <li>Hover over a link, but do NOT click on it to investigate the actual URL</li>
                            </ul>
                        </li>
                        <li>Asks you to provide personal information</li>
                        <li>Includes spelling and grammatical errors</li>
                    </ul>
                    <p>Examples of scam emails include:</p>
                    <ul>
                        <li>Claiming you are due to receive a large sum of money</li>
                        <li>An invoice for a product you never bought</li>
                        <li>Claiming your account will close soon unless you reactivate it</li>
                    </ul>
                </p>
                <h4>Examples</h4>
                <h5>Case 1</h5>
                <div className="scam-example-img-container">
                    <img src="/images/Email_example2.png" alt="Email example" className="example-image"
                        style={{
                            maxWidth: '700px'
                        }} />
                </div>
                <p>
                    Signs this email is a scam:
                    <ul>
                        <li>Includes a generic greeting</li>
                        <li>Creates a sense of urgency by making you fearful that there is a mistake with your taxes</li>
                        <li>Encouraging  you to open a link</li>
                        <li>Destination URL does not match the text shown</li>
                    </ul>
                </p>
                <h5>Case 2</h5>
                <div className="scam-example-img-container">
                    <img src="/images/Email_example3.png" alt="Email example" className="example-image"
                        style={{
                            maxWidth: '500px'
                        }} />
                    <img src="/images/Email_example4.png" alt="Email example" className="example-image"
                        style={{
                            maxWidth: '700px'
                        }} />
                </div>
                <p>
                    Signs this email is a scam:
                    <ul>
                        <li>Claims to be from Telstra but email address does not match</li>
                        <li>Includes a generic greeting</li>
                        <li>Creates a sense of urgency by claiming your account will be terminated if you don’t pay</li>
                        <li>Destination URL for making the payment does not match what you would expect for an Australian company</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself" ref={protectYourselfRef}>
                <div className="protect-yourself-contain">
                    <h3>How to Protect Yourself</h3>
                    <p>
                        <ul>
                            <li>Never open links you are sent
                                <ul>
                                    <li>Independently search for the website or use the organisation’s authenticated portal or app</li>
                                </ul>
                            </li>
                            <li>Independently find contact details for the person or organisation and use to verify if the email was real</li>
                            <li>To protect your email account
                                <ul>
                                    <li>Use unique passwords for your different accounts</li>
                                    <li>Use multi-factor authentication if it’s available to add an extra layer of security</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
            </section>
            {/* Real-Life Story Section */}
            <section className="real-life-story" ref={realLifeStoryRef}>
                <h3>Real-Life Story</h3>
                <h4>A new scam alleges you have overpaid your Netflix bill</h4> {/* Story Title */}
                <img src="/images/Emailscamrealstory.jpeg" alt="Email scam real story" className="example-image" />
                <p>
                    A new phishing scam is targeting Netflix subscribers by claiming they have overpaid their bill and asking for banking details to process a refund. Scammers impersonate Netflix, using realistic-looking emails to deceive recipients. Cybercrime tracker Scamwatch warns users not to click any links and to delete such emails immediately. Netflix advises that they will never ask for personal information, such as bank details or passwords, via email or text and that payment should never be made through third-party vendors. Users are encouraged to verify any suspicious emails directly with the company rather than engaging with the message.
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

export default EmailScams;

