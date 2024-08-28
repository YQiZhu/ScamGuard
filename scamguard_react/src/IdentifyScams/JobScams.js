import React, { useEffect, useState } from 'react';
import './PhoneScams.css';

function JobScams() {

    return (
        <div className="ScamsPage">
            <h2>Job Scams</h2>
            <p>Details and examples about how Job Scams work and how to identify them.</p>
            <p>some text</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
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
            </section>
        </div>
    );
}

export default JobScams;