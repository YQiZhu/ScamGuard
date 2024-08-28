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
                        Protecting yourself from scams involves being vigilant and taking certain precautions.
                        Always verify the identity of the person or organization contacting you, never share personal information
                        unless you are sure it is safe, and report any suspicious activity to the authorities.
                    </p>
                    {/* Add more content or components specific to protecting yourself */}
                </section>
            </div>
        </div>
    );
}

export default EmailScams;