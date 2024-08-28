import React from 'react';
import './PhoneScams.css';

function SocialMediaScams() {
    return (
        <div className="ScamsPage">
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
                <img src="/images/SocialMedia_example.png" alt="Social Media example" className="example-image" />
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    <ul>
                      <li>Investigate the profiles of people who contact you, check how many posts they have made and how many friends or followers they have
                        <ul>
                            <li>A lack of activity and friends or followers can indicate that the profile is fake</li>
                        </ul>
                      </li>
                      <li>Never send money to a person you have only met online</li>
                      <li>Never send personal photos of yourself to someone you have only met online</li>
                      <li>Never open links you are sent</li>
                      <li>If they claim they are someone you know try contacting them through an existing method you have such as another social media platform or their phone number</li>
                      <li>To protect your social media accounts
                        <ul>
                            <li>Use strong, unique password</li>
                            <li>Enable multi-factor authentication if it’s available</li>
                        </ul>
                      </li>
                    </ul>
                </p>
                {/* Add more content or components specific to protecting yourself */}
            </section>
        </div>
    );
}

export default SocialMediaScams;