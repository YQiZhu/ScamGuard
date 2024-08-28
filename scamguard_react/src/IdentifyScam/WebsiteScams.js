import React from 'react';
// import './MostReportedScam.css'; 

function WebsiteScams() {
    return (
        <div className="WebsiteScamsPage">
            <h2>Website Scams</h2>
            <p>Details and examples about how Website Scams work and how to identify them.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
                <p>
                    It is likely that you are interacting with a scam website if it:
                    <ul>
                      <li>Has an unusual URL such as containing unnecessary words, extra characters, replaces letters with numbers or has words misspelt such as a company name</li>
                      <li>Prices items significantly lower compare to other sites</li>
                      <li>Requires unusual payment methods such as gift cards or cryptocurrency</li>
                      <li>Contains only generic, positive reviews</li>
                      <li>Has poor quality design and spelling and grammar errors</li>
                      <li>Is missing a contact information section</li>
                      <li>Is missing a shipping and return policy</li>
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

export default WebsiteScams;