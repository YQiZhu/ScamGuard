import React from 'react';
import './PhoneScams.css'; // Optional: Add a CSS file for custom styling

function PhoneScams() {
    return (
        <div className="ScamsPage">
            <h2>Phone Scams</h2>
            <p>Details and examples about how phone scams work and how to identify them.</p>
            
            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
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
                    Protecting yourself from scams involves being vigilant and taking certain precautions. 
                    Always verify the identity of the person or organization contacting you, never share personal information 
                    unless you are sure it is safe, and report any suspicious activity to the authorities.
                </p>
                {/* Add more content or components specific to protecting yourself */}
            </section>
        </div>
    );
}

export default PhoneScams;
