import React from 'react';
import './PhoneScams.css';

function EmailScams() {

    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/netflix-scam-email-claims-you-overpaid-your-bill-and-are-entitled-to-a-refund/b4597579-73ba-4d77-8501-f64ddc516a40'; // Replace with the desired URL
    };

    return (
        <div className="ScamsPage">
            <div>
                <h2>Email Scams</h2>
                <p>Email scams, often disguised as legitimate communications, use urgent or alarming messages to trick recipients into clicking on links or opening attachments. These emails may mimic messages from reputable companies or government agencies and aim to steal personal information, such as login credentials or bank account details. Some scams also install malware on the victim's device, compromising their security. It's essential to be cautious with emails from unknown senders and use spam filters to minimize risk.</p>
                
                {/* How to Identify a Scam Section */}
                <section className="scam-identification">
                    <p>
                        It is likely that an email is a scam if it:
                        <ul>
                            <li>Includes generic greetings</li>
                            <li>Claims to be from an organisation but the email address does not match
                                <ul>
                                    <li>For example, it is a free webmail address (gmail, outlook) or the organisation’s name is misspelt</li>
                                </ul>
                            </li>
                            <li>Includes a link that does not match the URL it goes to
                                <ul>
                                    <li>Hover over a link, but do NOT click on it to investigate the actual URL</li>
                                </ul>
                            </li>
                            <li>Asks you to provide personal information</li>
                            <li>Includes spelling and grammatical errors</li>
                        </ul>
                    </p>
                    <p>
                        Examples of scam emails include:
                        <ul>
                            <li>Claiming you are due to receive a large sum of money</li>
                            <li>An invoice for a product you never bought</li>
                            <li>Claiming your account will close soon unless you reactivate it</li>
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
                            <li>Independently find contact details for the person or organisation and use to verify if the email was real</li>
                            <li>To protect your email account
                                <ul>
                                    <li>Use unique passwords for your different accounts</li>
                                    <li>Use multi-factor authentication if it’s available to add an extra layer of security</li>
                                </ul>
                            </li>
                        </ul>
                    </p>

                    <img src="/images/scam_guard_logo.jpg" alt="ScamGuard Logo" className="example-image" />

                    {/* Real-Life Story Section */}
                    <section className="real-life-story">
                        <h3>Real-Life Scam Story</h3>
                        <h4>"A new scam alleges that you have overpaid your Netflix bill"</h4> {/* Story Title */}
                        <p>
                            A new phishing scam is targeting Netflix subscribers by claiming they have overpaid their bill and asking for banking details to process a refund. Scammers impersonate Netflix, using realistic-looking emails to deceive recipients. Cybercrime tracker Scamwatch warns users not to click any links and to delete such emails immediately. Netflix advises that they will never ask for personal information, such as bank details or passwords, via email or text and that payment should never be made through third-party vendors. Users are encouraged to verify any suspicious emails directly with the company rather than engaging with the message.
                        </p>
                    </section>

                    {/* Clickable Box with URL Link */}
                    <button onClick={goToOtherPage}>Go to Source URL of the Story</button>
                </section>
            </div>
        </div>
    );
}

export default EmailScams;
