import React, { useEffect, useState } from 'react';
import './PhoneScams.css';

function JobScams() {
    
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/job-ad-scam-it-worker-loses-150k/9486e365-d56c-4855-bdd0-9fe640ae3aae'; // Replace with the desired URL
    };

    return (
        <div className="ScamsPage">
            <h2>Job Scams</h2>
            <p>Job or employment scams target job seekers with fake job listings or interviews, aiming to steal personal information or money. Scammers may post seemingly legitimate job ads and then ask applicants to pay fees for background checks, training, or equipment. They may also conduct fake interviews to make the scam seem more authentic. Red flags include requests for upfront payments, sharing of personal financial information before hiring, and job offers that seem too good to be true. It's important to verify the legitimacy of job offers and be cautious throughout the hiring process.</p>
           
            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Job Scam</h3>
                <p>
                    It is likely that you are encountering a job scam if:
                    <ul>
                      <li>The job offer is made through an unsolicited message</li>
                      <li>You are told you can earn a high income with little effort while working from home</li>
                      <li>The hiring process is very quick with no interview and without asking for references</li>
                      <li>Personal information such as bank account details are requested before you are hired</li>
                      <li>You are required to pay a recruitment fee or pay for training materials</li>
                      <li>The job requires you to enrol new recruits</li>
                      <li>You are told to top up an account with your own money to complete your job</li>
                    </ul>
                </p>
                
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    <ul>
                      <li>Don’t trust that a job ad is real just because it appears on a trusted platform</li>
                      <li>Never send money or provide personal information to anyone you have only met online</li>
                      <li>Never send identity documents unless you are certain the organisation is genuine</li>
                      <li>Never accept payments or rewards to recruit other people</li>
                      <li>Independently verify the identities of anyone who has reached out to you, checking for contact details from the organisation’s official website</li>
                      <li>Search for reviews of the company</li>
                    </ul>
                </p>

                {/* Real-Life Story Section */}
                <section className="real-life-story">
                    <h3>Real-Life Story</h3>
                    <h4>Cybersecurity Expert Loses $150,000 to Sophisticated Job Scam</h4> {/* Story Title */}
                    <img src="/Jobscamrealstory.jpeg" alt="Job scam real story" className="example-image" />
                    <p>
                        A Sydney cybersecurity expert, "Josh" (name changed), lost $150,000 of his and his parents' savings to a job scam. Despite having a degree in cybersecurity, Josh was tricked by a fake job ad on Instagram that led him to a WhatsApp chat, where scammers convinced him to transfer money to receive commissions for online tasks. Over three days, Josh was manipulated into draining his savings and even his parents' accounts. He realized it was a scam only after losing everything. The experience left him diagnosed with depression, and he now calls for greater accountability from social media platforms in verifying job ads to prevent such scams.
                    </p>
                </section>

                {/* Clickable Box with URL Link */}
                <button onClick={goToOtherPage}>Read the Full Story</button>
            </section>
        </div>
    );
}

export default JobScams;
