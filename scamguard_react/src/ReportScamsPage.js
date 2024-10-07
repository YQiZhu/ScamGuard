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
            <nav className="Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><span onClick={() => scrollToSection(stepsToReportRef)}>Steps to Reporting Scams</span></li>
                    <li><span onClick={() => scrollToSection(howToReportRef)}>How to Report a Scam</span></li>
                    <li><span onClick={() => scrollToSection(whyReportRef)}>Why Report a Scam</span></li>
                    <li><span onClick={() => scrollToSection(afterReportRef)}>What Happens After You Report It</span></li>
                </ul>
            </nav>

            {/* Introduction Section */}
            <header className="report-scams-header">
                <h1>Report Scam</h1>
            </header>

            <section className='report-scam-step' ref={stepsToReportRef}>
                <h2>Steps to Reporting Scams</h2>
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

            <section className='how-to-report-scam' ref={howToReportRef} >
                <h2>How to Report a Scam</h2>
                <p>
                    <h3>You didn’t give them your personal information or property</h3>
                    <ul>
                        <li>First, stop all communication with the scammer.</li>
                        <li>Provide details of the scam (e.g., screenshots, photos, chat logs), including who contacted you and when.</li>
                        <li>You need to understand what type of scam this is. If you are not sure, click {' '}
                            <span
                                onClick={() => navigate('/identifyScam')}
                                style={{ color: '#FAFF00', textDecoration: 'underline', cursor: 'pointer' }}
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
                    <h3>You think a scammer has stolen your personal information</h3>
                    <ul>
                        <li>Contact your financial institution to secure your financial accounts.</li>
                        <li>Change the passwords to any other accounts you think the scammer may have accessed or to which they now have access. This could include banking, superannuation, and email accounts.</li>
                        <li>Complete a report through <a href="https://www.cyber.gov.au/report-and-recover/report" target="_blank">ReportCyber</a>.</li>
                        <li>IDCARE can help you reduce the harm caused by identity breaches and misuse. Visit <a href="https://www.idcare.org/" target="_blank">IDCARE</a> or call 1800 595 160 (Monday to Friday 8am–5pm).</li>
                        <li>If you have disclosed your personal information on a social platform, please contact the relevant platform.</li>
                        <li>Look for suspicious emails, phone calls, texts, or messages through social media. Block or don't answer anyone you don't know. Don't click on any links.</li>
                    </ul>
                </p>
                <p>
                    <h3>You’ve been scammed and lost personal property</h3>
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

            <section className='why-report-scam' ref={whyReportRef}>
                <h2>Why Report a Scam?</h2>
                <p>
                    <strong>Opportunity to recover losses:</strong> Reporting a scam is not only for justice; it may also help you get your lost funds back. ReportCyber and some specialized organizations will use your report to track the flow of funds and take steps to recover your money. Every report is a chance to regain control of the situation and prevent your losses from being irreversible. Please don't pass up this opportunity; reporting may be the key step to turning the situation around.
                </p>
                <p>
                    <strong>Protect others:</strong> With your consent, ScamWatch will protect you and others from new and emerging scams. The report you submit is not only to protect your own rights but also to build a line of defense for countless potential victims. Your report could help many families and individuals avoid the pain and loss caused by scams.
                </p>
                <p>
                    <strong>Get additional assistance:</strong> If you have already been a victim of fraud, IDCARE can provide you with critical support and guidance. IDCARE specializes in helping victims deal with identity theft and related cybercrime. They will work with you to develop a personalized recovery plan, assist you in protecting your personal information, mitigate your losses, and guide you through the necessary steps to recover and protect your identity.
                </p>
            </section>

            <section className='after-report-scam' ref={afterReportRef}>
                <h2>What Happens After You Report It?</h2>
                <p>
                    Once you have submitted a report, we will immediately assess the situation and pass the relevant information to the appropriate law enforcement agencies or cybersecurity experts. We may contact you for more information or to provide further support.
                </p>
            </section>

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
