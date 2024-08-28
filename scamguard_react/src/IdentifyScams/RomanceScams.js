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
                    Scammers often use various tactics to trick you into giving away personal information or money.
                    Some common signs of a scam include unexpected requests for personal information, offers that seem too good to be true,
                    and communication from unknown or suspicious sources.
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