import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TypeOfScams.css';

function RomanceScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.9news.com.au/national/scams-melbourne-woman-met-gabriel-on-a-dating-site-he-drained-her-bank-account-and-broke-her-heart/39b5a350-fc65-4a24-bb4e-e5036d391df4'; // Replace with the desired URL
    };

    const navigate = useNavigate();

    // Function to go back to the previous page
    const goBack = () => {
        // navigate(-1); // This will navigate back to the previous page
        navigate('/identifyScam')
    };

    // Create a reference to the section
    const scamIdentificationRef = useRef(null);
    const protectYourselfRef = useRef(null);
    const realLifeStoryRef = useRef(null);

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 60, // Adjust 80px above the element
                behavior: 'smooth',
            });
        }
    };


    return (
        <div className="Scams-Page">

            {/* Side Menu */}
            <nav className="Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><span onClick={() => scrollToSection(scamIdentificationRef)}>How to Identify a Romance Scam</span></li>
                    <li><span onClick={() => scrollToSection(protectYourselfRef)}>How to Protect Yourself</span></li>
                    <li><span onClick={() => scrollToSection(realLifeStoryRef)}>Real Life Story</span></li>
                </ul>
            </nav>

            <header className="scams-header">
                <button onClick={goBack}>Back to Pervious Page</button>
                <h2>Romance Scams</h2>
                <p>Romance scams occur when fraudsters create fake profiles on dating sites or social media to deceive victims emotionally and financially. These scammers often express love or emotional attachment early on to build trust, but they avoid meeting in person, citing reasons like being in the military or working overseas. Once trust is established, they ask for money, often for supposed emergencies. Victims should be wary of anyone who moves too quickly in a relationship and avoid sending money or personal information.</p>
            </header>
            {/* How to Identify a Scam Section */}
            <section className="scam-identification" ref={scamIdentificationRef}>
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
                <h4>Examples</h4>
                <div className="scam-example-img-container">
                    <img src="/images/Romance_example.png" alt="Investment example" className="example-image"
                        style={{
                            maxWidth: '400px'
                        }} />
                </div>
                <p>
                    Signs this is a romance scam:
                    <ul>
                        <li>Asking for money</li>
                        <li>Creating a sense of urgency by making it seem like an emergency and that they'll only be able to meet if you send the money</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself" ref={protectYourselfRef}>
                <div className="protect-yourself-contain">
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
                </div>
            </section>

            {/* Real-Life Story Section */}
            <section className="real-life-story" ref={realLifeStoryRef}>
                <h3>Real-Life Story</h3>
                <h4>Melbourne Woman Scammed by Online Romance</h4> {/* Story Title */}
                <img src="/images/Romancescamrealstory.jpeg" alt="Romance scam real story" className="example-image" />
                <p>
                    A Melbourne single mother named Kate was scammed out of $11,000 by a man she met on a dating site, who went by the name Gabriel. After months of building trust, Gabriel convinced Kate to send him money for supposed emergencies involving his children. Despite her initial suspicions, Kate was ultimately tricked, leading to significant financial loss and emotional distress. This story highlights the growing threat of romance scams, where scammers prey on vulnerable individuals seeking companionship.
                </p>

                {/* Clickable Box with URL Link */}
                <button onClick={goToOtherPage}>Read the Full Story</button>
            </section>

            <footer className='identify-scams-footer-container'>
                <div className='identify-scams-footer'>
                    <h2>What's Next?</h2>
                    <div className='identify-scams-footer-btn-group'>
                        <button
                            onClick={() => navigate('/identifyScam')}
                        >
                            Learn more about scams
                        </button>
                        <button
                            onClick={() => navigate('/quiz')}
                        >
                            Test you knowledge
                        </button>
                        <button
                            onClick={() => navigate('/posterGenerator')}
                        >
                            Generate a poster
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default RomanceScams;
