import React from 'react';
import './PhoneScams.css';

function WebsiteScams() {
    return (
        <div className="ScamsPage">
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
                <img src="/images/Website_example1.jpg" alt="Website example" className="example-image" />
                <img src="/images/Website_example2.jpg" alt="Website example" className="example-image" />
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    <ul>
                      <li>Research the organisation or person you’re in contact with before providing any personal information or giving money</li>
                      <li>Do not rely on reviews written on the website, search for independent reviews on other sites </li>
                      <li>If a pop-up appears on the screen do not click on it</li>
                      <li>If there is a secure, authenticated way to reach the organisation such as an app or portal use this</li>
                      <li>Look up the domain age using <a href="https://whois.domaintools.com/" target="_blank" rel="noopener noreferrer">Whois Lookup</a> 
                        <ul>
                            <li>If a website has not been active for long it is more likely to be a fake website</li>
                        </ul>
                      </li>
                      <li>Use a website checker such as the <a href="https://transparencyreport.google.com/safe-browsing/search?hl=en" target="_blank" rel="noopener noreferrer">Google Transparency Report</a> or <a href="https://www.urlvoid.com/" target="_blank" rel="noopener noreferrer">URLVoid</a> to check if a website is safe</li>
                    </ul>
               </p>
            </section>
        </div>
    );
}

export default WebsiteScams;