import React from 'react';
import './PhoneScams.css';

function TextScams() {
    return (
        <div className="ScamsPage">
            <h2>Text Scams</h2>
            <p>Details and examples about how Text Scams work and how to identify them.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
                <p>
                    It is likely that a text message is a scam if it:
                    <ul>
                      <li>Is unsolicited</li>
                      <li>Asks you to take immediate action</li>
                      <li>Asks you to click on a link</li>
                      <li>Requests personal information</li>
                      <li>Includes poor spelling and grammar</li>
                    </ul>
                </p>
                <p>
                   Examples of scam texts include:
                    <ul>
                      <li>Claiming that your account has been hacked</li>
                      <li>Saying you have won a prize</li>
                      <li>Informing you that a package you didn’t order has arrived</li>
                      <li>Claiming you have an overdue payment</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    <ul>
                      <li>Never open links you are sent
                        <ul>
                            <li>Independently search for the website or use the organisation’s authenticated portal or app</li>
                        </ul>
                      </li>
                      <li>Do your own check that the person contacting you is who they say they are
                        <ul>
                            <li>Don’t respond to the person using the phone number the sender has provided</li>
                            <li>Call the organisation or person using a phone number you have found yourself, such as from their official website</li>
                            <li>If they claim they are someone you know using a new phone number
                                <ul>
                                    <li>Try to call them using the existing phone number you have</li>
                                    <li>Ask them a question that only they would know the answer to</li>
                                </ul>
                            </li>
                        </ul>
                      </li>
                    </ul>
                </p>
            </section>
        </div>
    );
}

export default TextScams;