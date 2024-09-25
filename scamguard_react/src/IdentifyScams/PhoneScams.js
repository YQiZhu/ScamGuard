import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TypeOfScams.css'; // Optional: Add a CSS file for custom styling

function PhoneScams() {

    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/scam-warning-dial-1-phone-call-do-not-follow-it/ed1d6a55-6641-4732-8ded-8e40396c6af0'; // Replace with the desired URL
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
                top: ref.current.offsetTop - 60, // Adjust 80px above the element
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
                    <li><span onClick={() => scrollToSection(scamIdentificationRef)}>How to Identify a Phone Scam</span></li>
                    <li><span onClick={() => scrollToSection(protectYourselfRef)}>How to Protect Yourself</span></li>
                    <li><span onClick={() => scrollToSection(realLifeStoryRef)}>Real Life Story</span></li>
                </ul>
            </nav>

            <header className="scams-header">
                <button onClick={goBack}>Back to Pervious Page</button>
                <h2>Phone Scams</h2>
                <p>Phone scams aim to deceive individuals into giving away personal information, money, or access to financial accounts. These scams often involve impersonating legitimate organisations, such as banks, government agencies, or tech support, to create a sense of urgency or fear. Common tactics include threatening legal action, claiming a problem with a service (like your internet or taxes), or offering fake prizes or deals. The goal is to trick the victim into making payments, sharing sensitive information, or allowing access to their devices or accounts.</p>
            </header>
            {/* How to Identify a Scam Section */}
            <section className="scam-identification" ref={scamIdentificationRef}>
                <h3>How to Identify a Phone Scam</h3>
                <p>
                    It is likely that a phone call is a scam if it:
                    <ul>
                        <li>Is unexpected</li>
                        <li>Comes from an unknown number</li>
                        <li>Encourages you to take immediate action</li>
                        <li>Asks for personal or financial information</li>
                        <li>Has poor quality</li>
                    </ul>
                </p>
                <p>
                    Examples of scam phone calls include:
                    <ul>
                        <li>Claiming your account has been hacked</li>
                        <li>Threatening you with arrest</li>
                        <li>Asking to install software or access your computer to resolve an issue</li>
                        <li>Claiming you must pay for your service to continue</li>
                    </ul>
                </p>
                <h4>Examples</h4>
                <h5>nbn Disconection Scam</h5>
                <p>You receive a call from someone claiming to be from nbn and threatening to disconnect your internet service in the next 48 hours. They aim to get you to reveal your personal details and account information, potentially your credit card or bank account details, by presenting this as required to get your service reconnected. </p>
                <p>Signs this is a scam
                    <ul>
                        <li>Unexpected contact</li>
                        <li>Asking for personal and financial information</li>
                        <li>Threatening you to take immediate action</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself" ref={protectYourselfRef}>
                <div className="protect-yourself-contain">
                    <h3>How to Protect Yourself</h3>
                    <p>
                        <ul>
                            <li>Let calls from unknown numbers go to voicemail</li>
                            <li>Hang up if you don’t recognise the caller or you’re not sure who they are</li>
                            <li>Hang up if the caller gets aggressive or threatening</li>
                            <li>Call the organisation or person back on a number you have found yourself</li>
                            <li>Never share personal information or financial details over the phone</li>
                            <li>Never allow a caller to have remote access to your computer</li>
                        </ul>
                    </p>
                </div>
            </section>

            {/* Real-Life Story Section */}
            <section className="real-life-story" ref={realLifeStoryRef}>
                <h3>Real-Life Story</h3>
                <h4>Warning over 'dial 1' phone scam in Australia</h4> {/* Story Title */}
                <img src="/images/Phonescamrealstory.jpg" alt="Phone scam real story" className="example-image"
                    style={{
                        maxWidth: '400px'
                    }} />
                <p>
                    A phone scam circulating in Australia involves automated calls that instruct recipients to "dial 1" to address a purported issue, such as the threat of arrest, NBN disconnection, or unpaid debts. Scamwatch has warned the public to hang up immediately, as these claims are false and designed to scare people into action. Individuals are encouraged to report such scams through the Scamwatch website.

                </p>


                {/* Clickable Box with URL Link */}
                <button onClick={goToOtherPage}>Read the Full Story</button>
            </section>
        </div>
    );
}

export default PhoneScams;
