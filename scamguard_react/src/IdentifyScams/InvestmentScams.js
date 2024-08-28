import React from 'react';
import './PhoneScams.css';

function InvestmentScams() {
    return (
        <div className="ScamsPage">
            <h2>Investment Scams</h2>
            <p>Details and examples about how Investment Scams work and how to identify them.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
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

export default InvestmentScams;