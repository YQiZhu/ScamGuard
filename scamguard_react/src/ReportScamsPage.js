import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReportScamsPage.css';

const ReportScamsPage = () => {
    const navigate = useNavigate();

    // Create a reference to the section
    const stepsToReportRef = useRef(null);
    const howToReportRef = useRef(null);
    const whyReportRef = useRef(null);
    const afterReportRef = useRef(null);
    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const step4Ref = useRef(null);

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        // if (ref.current) {
        //     ref.current.scrollIntoView({ behavior: 'smooth' });
        // }

        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 80, // Adjust 80px above the element
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="Report-Page">

            {/* Side Menu */}
            <nav className="Report-Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><span onClick={() => scrollToSection(stepsToReportRef)}>Steps To Do Before Reporting</span></li>
                    <li><span onClick={() => scrollToSection(howToReportRef)}>Reporting Guidelines</span></li>
                    <li><span onClick={() => scrollToSection(whyReportRef)}>Why do we need to report immediately?</span></li>
                    <li><span onClick={() => scrollToSection(afterReportRef)}>What will happen after the report?</span></li>
                    <li><span onClick={() => scrollToSection(step1Ref)}>Act fast to prevent further losses</span></li>
                    <li><span onClick={() => scrollToSection(step2Ref)}>Report Scams</span></li>
                    <li><span onClick={() => scrollToSection(step3Ref)}>Watch out for follow up scams</span></li>
                    <li><span onClick={() => scrollToSection(step4Ref)}>Get Support</span></li>

                </ul>
            </nav>

            {/* Introduction Section */}
            <header className="report-scams-header">
                <h1>Report Scam</h1>
            </header>

            {/* Emergency Calls Boxes */}
            <div className="emergency-calls-container">
                <div className="emergency-call-box">
                    <h3>Emergency Contact 1</h3>
                    <p>National Anti-Scam Centre Hotline:</p>
                    <h3>1300 292 371</h3>
                    <p>This line is open 24/7 for immediate scam reports and support.</p>
                </div>
                <div className="emergency-call-box">
                    <h3>Emergency Contact 2</h3>
                    <p>IDCARE Hotline:</p>
                    <h3>1800 595 160</h3>
                    <p>For identity theft and cyber support. Open Monday to Friday 8am–5pm.</p>
                </div>
            </div>

            <div ref={stepsToReportRef}>
                <details className='report-scam-step'>
                    <summary>Steps To Do Before Reporting</summary>
                    <section>
                        {/* <h2>Steps to Reporting Scams</h2> */}
                        <p>
                            <strong>Identify scams:</strong> If you receive suspicious calls, text messages, emails, or see suspicious websites, pay attention to whether these behaviors match common scam characteristics.
                        </p>
                        <p>
                            <strong>Record information:</strong> Record the suspicious information you come into contact with as detailed as possible, including time, content, and the other party's contact information.
                        </p>
                        <p>
                            <strong>Report immediately:</strong> Use the online form we provide or call the service hotline to report the information you have to us. Your report will help us take further action.
                        </p>
                    </section>
                </details>
            </div>

            <div ref={howToReportRef} >
                <details className='report-scam-step'>
                    <summary>Reporting Guidelines</summary>
                    <section>
                        <p>
                            <h3>If you didn’t give them your personal information:</h3>
                            <ul>
                                <li>First, STOP ALL COMMUNICATIONS with the scammer.</li>
                                <li>Provide details of the scam (e.g., screenshots, photos, chat logs), including who contacted you and when.</li>
                                <li>You need to understand what type of scam this is. If you are not sure, click {' '}
                                    <span
                                        onClick={() => navigate('/identifyScam')}
                                        style={{ fontWeight: 'bold', color: '#d36a07', textDecoration: 'underline', cursor: 'pointer' }}
                                    >
                                        How to Identify Scams
                                    </span>.
                                </li>
                                <li>Prepare any information you have about the scammer (e.g., ABN, ACN, name, email, phone number, social account, website, or URL).</li>
                                <li>Report the scam to <a href="https://www.scamwatch.gov.au/report-a-scam" target="_blank">National Anti-Scam Centre - Scamwatch</a>.</li>
                                <li>If you receive a scam message on a social platform, contact the relevant IT department and inform them.</li>
                            </ul>
                        </p>
                        <p>
                            <h3>If the scammer had stolen your personal information:</h3>
                            <ul>
                                <li>Contact your financial institution.</li>
                                <li>Change the passwords to any other accounts you think the scammer may have accessed or to which they now have access. This could include banking, superannuation, and email accounts.</li>
                                <li>Complete a report through <a href="https://www.cyber.gov.au/report-and-recover/report" target="_blank">ReportCyber</a>.</li>
                                <li>IDCARE can help you reduce the harm caused by identity breaches and misuse. Visit <a href="https://www.idcare.org/" target="_blank">IDCARE</a> or call 1800 595 160 (Monday to Friday 8am–5pm).</li>
                                <li>If you have disclosed your personal information on a social platform, please contact the relevant platform.</li>
                                <li>Look for suspicious emails, phone calls, texts, or messages through social media. Block or don't answer anyone you don't know. Don't click on any links.</li>
                            </ul>
                        </p>
                        <p>
                            <h3>If you had been scammed and lost personal property:</h3>
                            <ul>
                                <li>Immediately report the situation to your bank or financial institution.</li>
                                <li>Stop all communication with the scammer.</li>
                                <li>Complete a report through <a href="https://www.cyber.gov.au/report-and-recover/report" target="_blank">ReportCyber</a>.</li>
                                <li>Notify the social media or platform where the scam account interacted with you and report the account.</li>
                                <li>You can ask the social platform where you were defrauded how to change your password and seek more help from <a href="https://www.idcare.org/" target="_blank">IDCARE</a>.</li>
                                <li>Contact <a href="https://www.oaic.gov.au/privacy/your-privacy-rights/credit-reporting/access-your-credit-report" target="_blank">OAIC</a> to check if any attempts to open accounts in your name have been made.</li>
                            </ul>
                        </p>
                    </section>
                </details>
            </div>

            <div ref={whyReportRef}>
                <details className='report-scam-step'>
                    <summary>Why do we need to report immediately?</summary>
                    <section>
                        <p>
                            <strong>Opportunity to recover losses:</strong> Reporting a scam is not only for justice; it may also help you get your lost funds back. ReportCyber and some specialized organizations will use your report to track the flow of funds and take steps to recover your money. Every report is a chance to regain control of the situation and prevent your losses from being irreversible. Please don't pass up this opportunity; reporting may be the key step to turning the situation around.
                        </p>
                        <p>
                            <strong>Protect others:</strong> With your consent, Scamwatch will protect you and others from new and emerging scams. The report you submit is not only to protect your own rights but also to build a line of defense for countless potential victims in Australia. Your report could help many families and individuals avoid the pain and loss caused by scams.
                        </p>
                        <p>
                            <strong>Get additional assistance:</strong> If you have already been a victim of fraud, IDCARE can provide you with critical support and guidance. IDCARE specializes in helping victims deal with identity theft and related cybercrime. They will work with you to develop a personalized recovery plan, assist you in protecting your personal information, mitigate your losses, and guide you through the necessary steps to recover and protect your identity.
                        </p>
                    </section>
                </details>
            </div>

            <div ref={afterReportRef}>
                <details className='report-scam-step'>
                    <summary>What will happen after the report?</summary>
                    <section>
                        <p>
                            Once you have submitted a report, we will assess the situation and pass the relevant information to the appropriate law enforcement agencies or cybersecurity experts. They will contact you for more information or to provide further support.
                        </p>
                    </section>
                </details>
            </div>

            <header className="what-to-do-header">
                <h1>What to do if scammed?</h1>
            </header>

            <div ref={step1Ref}>
                <details className='report-scam-step'>
                    <summary>1. Act fast to prevent further losses</summary>
                    <section>
                        <p>If you suspect that you've been scammed, it's essential to take immediate action to protect yourself and prevent further losses. First, stop all communication with the scammer and do not provide any additional information. Next, contact your financial institution to secure your accounts and monitor for any suspicious activity. It's also important to change the passwords for any accounts that may have been compromised. Acting swiftly can significantly reduce the impact of the scam and protect your financial and personal information.</p>
                    </section>
                </details>
            </div>

            <div ref={step2Ref}>
                <details className='report-scam-step'>
                    <summary>2. Report Scams</summary>
                    <section>
                        <p>Once you have contacted your financial institution, you need to take action to report the scam. This may help you recover the money you have lost and prevent others from being scammed. If you are not sure how to report a scam and what materials you need to provide, please <a href="/reportScam" target="_blank">click here</a> to jump to the "Report Scam" interface. We will guide you on how to report a scam and what materials you need to prepare.</p>
                    </section>
                </details>
            </div>

            <div ref={step3Ref}>
                <details className='report-scam-step'>
                    <summary>3. Watch out for follow up scams</summary>
                    <section>
                        <p>After an initial scam, scammers often try to exploit the victim's anxiety and confusion with follow-up scams. Stay vigilant and report any suspicious contacts to a trusted organization.</p>
                    </section>
                </details>
            </div>

            <div ref={step4Ref}>
                <details className='report-scam-step'>
                    <summary>4. Get Support</summary>
                    <section>
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
                </details>
            </div>

            <footer className='report-footer-container'>
                <div className='report-footer'>
                    <h2>What's Next?</h2>
                    <div className='report-footer-btn-group'>
                        <button
                            onClick={() => navigate('/identifyScam')}
                        >
                            Learn more about scams
                        </button>
                        <button
                            onClick={() => navigate('/riskAssessment')}
                        >
                            Check your risk assessment
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ReportScamsPage;
