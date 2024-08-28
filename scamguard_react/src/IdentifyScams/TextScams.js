import React from 'react';
import './PhoneScams.css';

function TextScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/hi-mum-cyber-scam-warning-two-million-dollars-stolen/74cbffaf-9e36-4c69-88e4-26b54e730313'; // Replace with the desired URL
    };
    return (
        <div className="ScamsPage">
            <h2>Text Scams</h2>
            <p>Text scams involve deceptive text messages that trick individuals into revealing personal information or clicking on harmful links. These messages often appear to come from legitimate sources, like banks or government agencies, and may warn of suspicious activity or urgent problems. Scammers also use fake prize notifications and delivery alerts to lure victims into providing sensitive details or downloading malicious software. These scams exploit the trust people place in text messages to achieve their goals.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Text Scam</h3>
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
                <img src="/images/Text_example1.png" alt="Text example" className="example-image" />
                <img src="/images/Text_example2.png" alt="Text example" className="example-image" />
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
                    <img src="/images/scam_guard_logo.jpg" alt="ScamGuard Logo" className="example-image" />

                    {/* Real-Life Story Section */}
                    <section className="real-life-story">
                        <h3>Real-Life Story</h3>
                        <h4>‘Hi Mum’ Scam Results in $2 Million Loss</h4> {/* Story Title */}
                        <p>
                            The "Hi Mum" scam has cost Australian parents over $2 million in recent months. The scam involves scammers sending text messages from unknown numbers, pretending to be a victim's child who has lost their phone. The scammer asks the parent to delete the old number and requests money, usually claiming an urgent need. The scam has primarily targeted victims in New South Wales and Victoria, with a significant increase in reports since May. Police and cybersecurity experts warn that money from these scams is often quickly moved into cryptocurrency, making it difficult for victims to recover their funds. Authorities advise verifying such messages by contacting the relative through an alternative method and reporting any suspicious activity to the police.
                        </p>
                    </section>

                    {/* Clickable Box with URL Link */}
            </section>
        </div>
    );
}

export default TextScams;
