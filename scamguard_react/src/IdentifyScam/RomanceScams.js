import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import './MostReportedScam.css'; 

function RomanceScams() {

    return (
        <div className="RomanceScamsPage">
            <h2>Romance Scams</h2>
            <p>Details and examples about how Romance Scams work and how to identify them.</p>
            <p>some text</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
                <p>
                    It is likely that you are encountering a romance scam if:
                    <ul>
                      <li>They quickly profess to love you</li>
                      <li>They make requests for money due to a personal emergency</li>
                      <li>They are never able to meet in person or video call</li>
                      <li>They want to move off of the dating site/app to another messaging platform</li>
                      <li>They get angry if you ask questions or don’t follow what they ask</li>
                      <li>They offer to show you how to quickly and easily make money</li>
                      <li>They want you to keep your relationship secret from friends and family</li>
                    </ul>
                </p>
                {/* Add more content or components specific to identifying scams */}
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

export default RomanceScams;