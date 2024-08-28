import React, { useEffect, useState } from 'react';
import './PhoneScams.css';

function EmailScams() {

    return (
        <div className="ScamsPage">
            <div>
                <h2>Email Scams</h2>
                <p>some text</p>
                
                {/* How to Identify a Scam Section */}
                <section className="scam-identification">
                <p>
                    It is likely that an email is a scam if it:
                    <ul>
                      <li>Includes generic greetings</li>
                      <li>Claims to be from an organisation but the email address does not match
                        <ul>
                            <li>For example it is a free webmail address (gmail, outlook) or the organisation’s name is misspelt</li>
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
                </section>
            </div>
        </div>
    );
}

export default EmailScams;