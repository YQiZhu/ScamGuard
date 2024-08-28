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
                <ul>
                      <li>Let calls from unknown numbers go to voicemail</li>
                      <li>Hang up if you don’t recognise the caller or you’re not sure who they are</li>
                      <li>Hang up if the caller gets aggressive or threatening</li>
                      <li>Call the organisation or person back on a number you have found yourself</li>
                      <li>Never share personal information or financial details over the phone</li>
                      <li>Never allow a caller to have remote access to your computer</li>
                    </ul>
                </p>
            </section>
        </div>
    );
}

export default PhoneScams;
