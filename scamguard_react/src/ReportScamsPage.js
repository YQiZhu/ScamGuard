import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './IdentifyScamsPage.css';

const ReportScamsPage = () => {
    const navigate = useNavigate();

    // // Create a reference to the section
    // const phoneScamsRef = useRef(null);
    // const emailScamsRef = useRef(null);
    // const romanceScamsRef = useRef(null);

    // // Function to scroll to the section
    // const scrollToSection = (ref) => {
    //     ref.current?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div className="IdentifyScamsPage">
            {/* Side Menu */}
            {/* <nav className="Side-menu">
                <ul>
                    <li><a href="#most-reported" onClick={() => scrollToSection(mostReportedRef)}>Current Most Reported Scams</a></li>
                    <li><a href="#top-loss" onClick={() => scrollToSection(topLossRef)}>Current Top Scams By Loss</a></li>
                    <li><a href="#popular-contact" onClick={() => scrollToSection(popularContactRef)}>Current Most Popular Contact Methods</a></li>
                </ul>
            </nav> */}

            {/* Introduction Section */}
            <header className="indentify-scams-header">
                <h1>What to do if you've been scammed</h1>
            </header>
            <section>
                <h2>1. Check if it is a scam</h2>
                <p>If you are unsure whether you are being scammed click on <a href="/identify-scams" target="_blank">How to identify scams</a> in the navigation bar above.</p>
            </section>

            <section>
                <h2>2. If you still think it’s a scam</h2>
                <h3>You didn’t give them your personal information or property</h3>
                <ul>
                    <li>First, stop all communication with the scammer.</li>
                    <li>Provide details of the scam (e.g., screenshots, photos, chat logs), including who contacted you and when.</li>
                    <li>Understand what type of scam this is. If unsure, click <a href="/learn-about-scams" target="_blank">Learn About Scams</a>.</li>
                    <li>Prepare any information you have about the scammer (e.g., ABN, ACN, name, email, phone number, social account, website or URL).</li>
                    <li>Report the scam to <a href="https://www.scamwatch.gov.au/report-a-scam" target="_blank">National Anti-Scam Centre - Scamwatch</a>.</li>
                    <li>If you receive a scam message on a social platform, contact the relevant IT department and inform them.</li>
                </ul>

                <h3>You think a scammer has stolen your personal information</h3>
                <ul>
                    <li>Contact your financial institution to secure your financial accounts.</li>
                    <li>Change the passwords to any other accounts you think the scammer may have accessed.</li>
                    <li>Complete a report through <a href="https://www.cyber.gov.au/report-and-recover/report" target="_blank">ReportCyber</a>.</li>
                    <li>IDCARE can help you reduce the harm caused by identity breaches and misuse. Visit <a href="https://www.idcare.org/" target="_blank">IDCARE</a> or call 1800 595 160 (Monday to Friday 8am–5pm).</li>
                    <li>Contact the relevant platform if you have disclosed personal information on a social platform.</li>
                    <li>Look for suspicious emails, phone calls, texts, or messages through social media. Block or don't answer anyone you don't know.</li>
                </ul>

                <h3>You’ve been scammed and lost personal property</h3>
                <ul>
                    <li>Immediately report the situation to your bank or financial institution.</li>
                    <li>Stop all communication with the scammer.</li>
                    <li>Complete a report through <a href="https://www.cyber.gov.au/report-and-recover/report" target="_blank">ReportCyber</a>.</li>
                    <li>Notify the social media or platform where the scam account interacted with you and report the account.</li>
                    <li>Seek more help from <a href="https://www.idcare.org/" target="_blank">IDCARE</a>.</li>
                    <li>Contact <a href="https://www.oaic.gov.au/privacy/your-privacy-rights/credit-reporting/access-your-credit-report" target="_blank">OAIC</a> to check if any attempts to open accounts in your name have been made.</li>
                </ul>
            </section>

            <section>
                <h2>3. Watch out for follow up scams</h2>
                <p>After an initial scam, scammers often try to exploit the victim's anxiety and confusion with follow-up scams. Stay vigilant and report any suspicious contacts to a trusted organization.</p>
            </section>

            <section>
                <h2>4. Get Support</h2>
                <h3>Your financial institution</h3>
                <p>Contact your bank or credit union immediately if you’ve sent money to a scammer. They may be able to close your account or stop a transaction. Make sure you call them using their official phone number, not the one in the scam message.</p>

                <h3>ASD's ACSC ReportCyber</h3>
                <p>The Australian Cyber Security Centre (ACSC), part of the Australian Signals Directorate (ASD), is a key agency in protecting Australia from cyber threats. The ACSC provides a range of services to individuals, businesses, and government agencies to help them improve their cybersecurity. For more information, visit <a href="https://www.cyber.gov.au/about-us" target="_blank">ACSC's website</a> or call the Australian Cyber Security Hotline on 1300 292 371 (open 24 hours, 7 days a week).</p>

                <h3>IDCARE</h3>
                <p>IDCARE is the national identity and cyber support service for Australia and New Zealand, specializing in helping individuals and businesses deal with identity theft, cyber fraud, and related security threats. Visit <a href="https://www.idcare.org/" target="_blank">IDCARE's website</a> for more information, or call 1800 595 160 (Monday to Friday 8am–5pm).</p>

                <h3>National Anti-Scam Centre - Scamwatch</h3>
                <p>Scamwatch is run by the National Fraud Centre and collects reports of scams to help warn others and take action to stop them. They also provide up-to-date scam information to help you spot and avoid scams. Visit <a href="https://www.scamwatch.gov.au/" target="_blank">Scamwatch's website</a> for more information.</p>

                <h3>Services Australia</h3>
                <p>Contact the Services Australia Scams and Identity Theft Helpdesk. They provide crucial information and support to help individuals protect themselves against scams and identity theft. Visit <a href="https://www.servicesaustralia.gov.au/scams-and-identity-theft?context=60271" target="_blank">Services Australia's website</a> or call 1800 941 126 (Monday to Friday 8am–5pm).</p>

                <h3>MoneySmart</h3>
                <p>If a scam is causing you problems with debt, talk to MoneySmart. This is a free and confidential service to help you get your finances back on track. Visit <a href="https://moneysmart.gov.au/" target="_blank">MoneySmart's website</a> for more information.</p>

                <h3>Australian Taxation Office</h3>
                <p>If you suspect you have become a victim of tax-related fraud, the ATO encourages you to report it immediately. They will record the relevant information and guide you on how to protect yourself. Visit <a href="https://www.ato.gov.au/" target="_blank">ATO's website</a> for more information.</p>

                <h3>If you need someone to talk to</h3>
                <p>If you need emotional support, you can contact Beyond Blue at 1300 22 4636 (24 hours a day, 7 days a week) or visit their <a href="https://www.beyondblue.org.au/get-support/talk-to-a-counsellor/chat" target="_blank">website</a> for online chat support.</p>
                <p>You can also reach Lifeline at 13 11 14 (24 hours a day, 7 days a week) or visit their <a href="https://www.lifeline.org.au/crisis-chat/" target="_blank">website</a> for online chat support.</p>
            </section>
        </div>
    );
};

export default ReportScamsPage;
