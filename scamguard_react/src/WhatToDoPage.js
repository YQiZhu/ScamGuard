import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './WhatToDoPage.css';

const WhatToDoPage = () => {
    const navigate = useNavigate();

    // Create a reference to the section
    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const step4Ref = useRef(null);

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 80, // Adjust 80px above the element
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="what-to-do-Page">
            {/* Side Menu */}
            <nav className="Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><span onClick={() => scrollToSection(step1Ref)}>Act fast to prevent further losses</span></li>
                    <li><span onClick={() => scrollToSection(step2Ref)}>Report Scams</span></li>
                    <li><span onClick={() => scrollToSection(step3Ref)}>Watch out for follow up scams</span></li>
                    <li><span onClick={() => scrollToSection(step4Ref)}>Get Support</span></li>
                </ul>
            </nav>

            {/* Introduction Section */}
            <header className="what-to-do-header">
                <h1>What to do if you've been scammed</h1>
            </header>
             <section className='what-to-do-step1' ref={step1Ref}>
                <h2>1. Act fast to prevent further losses</h2>
                <p>If you suspect that you've been scammed, it's essential to take immediate action to protect yourself and prevent further losses. First, stop all communication with the scammer and do not provide any additional information. Next, contact your financial institution to secure your accounts and monitor for any suspicious activity. It's also important to change the passwords for any accounts that may have been compromised. Acting swiftly can significantly reduce the impact of the scam and protect your financial and personal information.</p>
            </section>

            <section className='what-to-do-step2' ref={step2Ref}>
                <h2>2. Report Scams</h2>
                <p>Once you have contacted your financial institution, you need to take action to report the scam. This may help you recover the money you have lost and prevent others from being scammed. If you are not sure how to report a scam and what materials you need to provide, please <a href="/reportScam" target="_blank">click here</a> to jump to the "Report Scam" interface. We will guide you on how to report a scam and what materials you need to prepare.</p>
            </section>

            <section className='what-to-do-step3' ref={step3Ref}>
                <h2>3. Watch out for follow up scams</h2>
                <p>After an initial scam, scammers often try to exploit the victim's anxiety and confusion with follow-up scams. Stay vigilant and report any suspicious contacts to a trusted organization.</p>
            </section>

            <section className='what-to-do-step4' ref={step4Ref}>
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

export default WhatToDoPage;
