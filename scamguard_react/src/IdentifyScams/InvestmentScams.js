import React from 'react';
import './PhoneScams.css';

function InvestmentScams() {
    return (
        <div className="ScamsPage">
            <h2>Investment Scams</h2>
            <p>Details and examples about how Investment Scams work and how to identify them.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
                <p>
                    It is likely that you are encountering an investment scam if:
                    <ul>
                      <li>They promise a low or no risk investment which will provide high returns</li>
                      <li>They claim a well-known figure recommends the investment</li>
                      <li>They make contact through an unsolicited message</li>
                      <li>They request remote access to your device to set up accounts and make transactions</li>
                      <li>They request payment in cryptocurrency</li>
                      <li>The “adviser” who is helping you does not have an Australian financial services licence</li>
                    </ul>
                </p>
                <p>
                Deepfakes are becoming a more common tool used by scammers. They are often used to create fake celebrity videos where they promote an investment.
                Signs that a video is a deepfake include:
                    <ul>
                      <li>The person speaking with unusual pauses, odd pitches or different accents</li>
                      <li>Mouth movements not matching what the person is saying</li>
                      <li>Facial expressions and movements don’t match the speaker’s tone</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    <ul>
                      <li>Do your due diligence
                        <ul>
                            <li>Search company on <a href="https://moneysmart.gov.au/check-and-report-scams/investor-alert-list" target="_blank" rel="noopener noreferrer">ASIC’s investor alert list</a></li>
                            <li>Check that a person has an Australian financial services licence using the <a href="https://moneysmart.gov.au/financial-advice/financial-advisers-register" target="_blank" rel="noopener noreferrer">financial adviser’s register</a></li>
                        </ul>
                      </li>
                      <li>Search for reviews about the investment on independent websites and search the investment name with the word ‘scam’</li>
                      <li>Check that the person you are dealing with belongs to the organisation they claim to work for using contact details you have found yourself</li>
                      <li>Get independent legal advice or financial advice from a financial advisor with an Australian financial services licence</li>
                      <li>Look up the domain age using <a href="https://whois.domaintools.com/" target="_blank" rel="noopener noreferrer">Whois Lookup</a> 
                        <ul>
                            <li>If a website has not been active for long it is more likely to be a fake website</li>
                        </ul>
                      </li>
                    </ul>
                </p>
            </section>
        </div>
    );
}

export default InvestmentScams;