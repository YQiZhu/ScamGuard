import React from 'react';
import './PhoneScams.css'; // Optional: Add a CSS file for custom styling

function PhoneScams() {

    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/scam-warning-dial-1-phone-call-do-not-follow-it/ed1d6a55-6641-4732-8ded-8e40396c6af0'; // Replace with the desired URL
    };
    return (
        <div className="ScamsPage">
            <h2>Phone Scams</h2>
            <p>Phone scams aim to deceive individuals into giving away personal information, money, or access to financial accounts. These scams often involve impersonating legitimate organisations, such as banks, government agencies, or tech support, to create a sense of urgency or fear. Common tactics include threatening legal action, claiming a problem with a service (like your internet or taxes), or offering fake prizes or deals. The goal is to trick the victim into making payments, sharing sensitive information, or allowing access to their devices or accounts.</p>
            
            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
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
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
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
                    <img src="/images/scam_guard_logo.jpg" alt="ScamGuard Logo" className="example-image" />

                    {/* Real-Life Story Section */}
                    <section className="real-life-story">
                        <h3>Real-Life Story</h3>
                        <h4>A new scam alleges you have overpaid your Netflix bill</h4> {/* Story Title */}
                        <p>
                            A phone scam circulating in Australia involves automated calls that instruct recipients to "dial 1" to address a purported issue, such as the threat of arrest, NBN disconnection, or unpaid debts. Scamwatch has warned the public to hang up immediately, as these claims are false and designed to scare people into action. Individuals are encouraged to report such scams through the Scamwatch website.

                        </p>
                    </section>

                    {/* Clickable Box with URL Link */}
                    <button onClick={goToOtherPage}>Read the Full Story</button>
                </p>
            </section>
        </div>
    );
}

export default PhoneScams;
