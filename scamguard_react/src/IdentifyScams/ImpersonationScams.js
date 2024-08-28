import React from 'react';
import './PhoneScams.css'; // Optional: Add a CSS file for custom styling

function ImpersonationScams() {
    return (
        <div className="ScamsPage">
            <h2>Impersonation Scams</h2>
            <p>Details and examples about how Impersonation scams work and how to identify them.</p>
            
            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
                <p>
                    It is likely that you are encountering an impersonation scam if:
                    <ul>
                      <li>The message from an organisation is unexpected</li>
                      <li>There is an urgent request for you to take immediate action</li>
                      <li>You are asked to click on a link</li>
                      <li>You are told there has been an unauthorised transaction on your account or asked to confirm a payment you did not make</li>
                      <li>You are threatened with serious consequences such as arrest or deportation if you don’t respond</li>
                      <li>Details in the communication such as a URL or an email address do not match the organisation they are supposed to be from</li>
                      <li>You are asked to make a payment to a different account then you expect</li>
                      <li>A family member or friend contact you from a new number asking for financial help</li>
                    </ul>
                </p>
                <p>
                    Organisations that scammers will commonly impersonate include:
                    <ul>
                      <li>Banks</li>
                      <li>Government departments</li>
                      <li>Law enforcement</li>
                      <li>Telecommunication companies</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    It is likely that you are encountering an impersonation scam if:
                    <ul>
                      <li>Verify that the messages are real by directly contacting the person or organisation using contact details you have found yourself from their official website or through their secure, authenticated portal or app</li>
                      <li>Immediately cut contact with anyone who tries to threaten you</li>
                      <li>Don’t open any links you are sent or download any attachments</li>
                      <li>If they claim they are someone you know using a new phone number
                        <ul>
                            <li>Try to call them using the existing phone number you have</li>
                            <li>Ask them a question that only they would know the answer to</li>
                        </ul>
                      </li>
                    </ul>
                </p>                
            </section>
        </div>
    );
}

export default ImpersonationScams;
