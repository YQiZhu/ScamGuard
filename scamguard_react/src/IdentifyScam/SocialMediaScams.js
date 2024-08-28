import React from 'react';
// import './MostReportedScam.css'; 

function SocialMediaScams() {
    return (
        <div className="SocialMediaScamsPage">
            <h2>Social Media Scams</h2>
            <p>Details and examples about how Social Media Scams work and how to identify them.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
                <p>
                    It is likely that you are encountering a social media scam if:
                    <ul>
                      <li>You have received a request from someone you thought you were already connected to</li>
                      <li>An ad shows a well-known figure promoting a product or service to make money</li>
                      <li>You are receiving an unsolicited message</li>
                      <li>Someone is urgently asking you for money</li>
                      <li>Someone offers a quick and easy way to make money</li>
                      <li>A profile has limited activity including few posts and few friends or followers</li>
                    </ul>
                </p>
                <p>
                    Examples of social media scams include:
                    <ul>
                      <li>Claiming that you’ve won a giveaway and need to click a link to claim the prize</li>
                      <li>Offering extremely low prices for items</li>
                      <li>Offering to share information about a great investment opportunity</li>
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

export default SocialMediaScams;