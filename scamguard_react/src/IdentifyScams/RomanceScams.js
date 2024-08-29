import React, { useEffect, useState } from 'react';
import './PhoneScams.css';

function RomanceScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/scams-melbourne-woman-met-gabriel-on-a-dating-site-he-drained-her-bank-account-and-broke-her-heart/39b5a350-fc65-4a24-bb4e-e5036d391df4'; // Replace with the desired URL
    };

    return (
        <div className="ScamsPage">
            <h2>Romance Scams</h2>
            <p>Details and examples about how Romance Scams work and how to identify them.</p>
            <p>some text</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Romance Scam</h3>
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
                <img src="/images/Romance_example.png" alt="Investment example" className="example-image" />
                {/* Add more content or components specific to identifying scams */}
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    <ul>
                      <li>Don’t send personal information or documents to someone you have only met online</li>
                      <li>Never send money to someone you have only met online</li>
                      <li>Don’t share personal images or videos especially sexually intimate photos or videos with people you don’t know</li>
                      <li>Take things slowly and ask lots of questions to make sure everything about the person adds up</li>
                      <li>Search for the person’s name along with the word ‘scam’ and look for any results about romance scams</li>
                      <li>If they send you a photo do a reverse image search and see if someone else owns the photos you’ve been sent</li>
                      <li>Speak to your family friends about your online relationships to get their perspective on if there are any red flags</li>
                    </ul>
                </p>
                    
                    {/* Real-Life Story Section */}
                    <section className="real-life-story">
                        <h3>Real-Life Story</h3>
                        <h4>Melbourne Woman Scammed by Online Romance</h4> {/* Story Title */}
                        <img src="/images/Textscamrealstory.jpeg" alt="Text scam real story" className="example-image" />
                        <p>
                            A Melbourne single mother named Kate was scammed out of $11,000 by a man she met on a dating site, who went by the name Gabriel. After months of building trust, Gabriel convinced Kate to send him money for supposed emergencies involving his children. Despite her initial suspicions, Kate was ultimately tricked, leading to significant financial loss and emotional distress. This story highlights the growing threat of romance scams, where scammers prey on vulnerable individuals seeking companionship.
                        </p>
                    </section>

                    {/* Clickable Box with URL Link */}
                    <button onClick={goToOtherPage}>Read the Full Story</button>
            </section>
        </div>
    );
}

export default RomanceScams;
