import React from 'react';
import './PhoneScams.css'; // Optional: Add a CSS file for custom styling

function ImpersonationScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.scamwatch.gov.au/protect-yourself/real-life-stories/scam-victims-tell-us-their-stories/ato-impersonation-scam-mother-in-law-lost-4000-over-a-fake-tax-debt'; // Replace with the desired URL
    };
    return (
        <div className="ScamsPage">
            <h2>Impersonation Scams</h2>
            <p>Impersonation scams involve scammers pretending to be someone trusted, such as a friend, company executive, or government official, to gain sensitive information or money. These scams can occur through phone calls, emails, social media, or even in person. Scammers create a sense of urgency or authority to pressure victims into complying with their demands, such as transferring funds or revealing confidential information. Verifying the identity of the person through official channels is essential to avoid being scammed.</p>
            
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
                    <img src="/images/scam_guard_logo.jpg" alt="ScamGuard Logo" className="example-image" />

                    {/* Real-Life Story Section */}
                    <section className="real-life-story">
                        <h3>Real-Life Story</h3>
                        <h4>ATO impersonation scam: mother-in-law lost $4000 over a fake tax debt</h4> {/* Story Title */}
                        <p>
                            A woman named Jane received a call from someone pretending to be from the Australian Taxation Office (ATO). The caller claimed she owed $4,000 in taxes and threatened her with arrest if she didn’t pay immediately. The scammer’s aggressive and intimidating behavior made Jane, who speaks English as a second language, extremely anxious. Fearing arrest, she complied with the scammer’s demands and transferred the money. It wasn’t until later that she realized she had been deceived. This incident underscores the importance of being cautious with unexpected calls or messages demanding money or personal details. It’s crucial  to verify the identity of the caller by reaching out to the organization directly using official contact information.
                        </p>
                    </section>

                    {/* Clickable Box with URL Link */}
                    <button onClick={goToOtherPage}>Read the Full Story</button>
                </p>                
            </section>
        </div>
    );
}

export default ImpersonationScams;