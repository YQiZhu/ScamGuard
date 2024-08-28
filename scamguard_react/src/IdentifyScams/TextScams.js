import React from 'react';
// import './MostReportedScam.css'; 

function TextScams() {
    return (
        <div className="TextScamsPage">
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
                    Protecting yourself from scams involves being vigilant and taking certain precautions.
                    Always verify the identity of the person or organization contacting you, never share personal information
                    unless you are sure it is safe, and report any suspicious activity to the authorities.
                </p>
                {/* Add more content or components specific to protecting yourself */}
            </section>
        </div>
    );
}

export default TextScams;
