import React from 'react';
import './PhoneScams.css';

function SocialMediaScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.abc.net.au/news/2024-04-15/australians-falling-for-facebook-fake-ads-online-trading-scams/103640678'; // Replace with the desired URL
    };
    return (
        <div className="ScamsPage">
            <h2>Social Media Scams</h2>
            <p>ocial media scams often involve impersonation and phishing tactics, where scammers create fake profiles to mislead users. They may send spam messages or harmful links while pretending to be someone familiar or a reputable organization. These scams can take the form of deceptive romantic relationships, where trust is gradually built before soliciting money. They may also involve fake investment opportunities or fraudulent ads for non-existent products. By leveraging the personal and trusting aspects of social media, scammers manipulate victims into disclosing money or sensitive information.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Social Media Scam</h3>
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
                <h4>Examples</h4>
                <img src="/images/SocialMedia_example.png" alt="Social Media example" className="example-image" />
                <p>
                    Signs this message is a scam:
                    <ul>
                        <li>Unsolicited message</li>
                        <li>Claiming you won a contest without entering</li>
                        <li>Encouraging you to open a link</li>
                    </ul>
                </p>
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

                    {/* Real-Life Story Section */}
                    <section className="real-life-story">
                        <h3>Real-Life Story</h3>
                        <h4>Social Media Scam Devastates Australian Woman, Leading to $100,000 Loss</h4> {/* Story Title */}
                        <img src="/images/SocialMediascamrealstory.jpeg" alt="Social Media Scam Real Story" className="example-image" />
                        <p>
                            Deb, a 63-year-old Australian, was deceived by a sophisticated fraud syndicate advertising on Facebook. She clicked on an ad featuring a prominent Australian celebrity endorsing an investment opportunity. Interested, she signed up with the online trading platform and was soon contacted by Daniel, who posed as her investment broker. Over the next few months, Daniel maintained daily communication, persuading Deb to invest more money with promises of substantial returns. Ultimately, Deb lost her entire superannuation and savings, totaling over $100,000. Although devastated by the scam, Deb now dedicates her time to warning others by commenting on suspicious ads she encounters on Facebook.
                        </p>
                    </section>

                    {/* Clickable Box with URL Link */}
                    <button onClick={goToOtherPage}>Read the Full Story</button>
                {/* Add more content or components specific to protecting yourself */}
            </section>
        </div>
    );
}

export default SocialMediaScams;
