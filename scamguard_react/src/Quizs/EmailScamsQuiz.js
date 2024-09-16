import React, { useState } from 'react';
import './TextScamsQuiz.css'; // Assuming you want to use external CSS for styling

const EmailScamsQuiz = () => {

    const images = [
        {
            title: 'Scenario 1', img: '/images/reallife_scenario/email_scams/Scam-email1.png',
            feedback: [
                "Suspicious Sender: The email comes from "icloudsecure.co", not a legitimate Apple domain.",
                "Grammar Issues: There are noticeable errors, like "you photos and videos," which is uncommon for official emails.",
                "Urgency Tactic: The message pressures you to act quickly, a common scam strategy.",
                "Fake Links: The "upgrade" link may lead to a phishing site. Always verify URLs before clicking.",
                "Always check directly through official websites when in doubt."
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '370px', right: '245px', width: '115px', height: '25px' },
                { title: 'Link', top: '410px', left: '240px', width: '310px', height: '25px' },
            ] //done
        },
        {
            title: 'Scenario 2', img: '/images/reallife_scenario/email_scams/Scam-email2.png',
            feedback: [
                "Suspicious Sender: It’s from a Gmail account, not a legitimate "@paypal.com" domain.",
                "Unexpected Payment: If you didn’t make a $35 payment, it's likely fake.",
                "Urgency to Click: The "Activate PayPal Now" button creates urgency, potentially leading to a phishing site.",
                "Always verify by logging directly into your PayPal account, rather than clicking email links."             
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '538px', left: '340px', width: '115px', height: '30px' },
                { title: 'Link', top: '590px', right: '315px', width: '135px', height: '25px' },
            ] // done
        },
        {
            title: 'Scenario 3', img: '/images/reallife_scenario/email_scams/Scam-email3.png',
            feedback: [
                "Unexpected Order: If you didn’t place a $209.12 order, it's suspicious.",
                "Generic Details: It only says "Ship to: John," withoud any address or other information which is vague and typical of phishing emails.",
                "If you suspect a fake order, always go directly to the Amazon website by typing the URL into your browser instead of clicking links in an email."        
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '375px', left: '280px', width: '115px', height: '30px' },
            ] //done
        },
        {
            title: 'Scenario 4', img: '/images/reallife_scenario/email_scams/Scam-email4.png',
            feedback: [
                "Suspicious Sender: It uses "sharep0int@sharep0int.com" with a zero, mimicking the real SharePoint domain.",
                "File Access: "Employee Bonuses" should be personalized, yet the email states, "This link will work for anyone," which is suspicious.",
                "Fake Branding: The "Minisoft" logo instead of Microsoft is suspicious.",
                "To stay safe, avoid clicking the link, and if you're unsure about the file, contact the sender directly or verify through official channels like your company's SharePoint system."
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '565px', left: '340px', width: '115px', height: '30px' },
            ]
        }
    ];

    // State to store the current image
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [popupContent, setPopupContent] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [extraMessage, setExtraMessage] = useState('');

    // Function to change the image randomly
    const changeImage = () => {
        let randomIndex;

        // Ensure the new index is different from the current one
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (images[randomIndex] === currentImage);
        setCurrentImage(images[randomIndex]);
        setShowPopup(false);
    };

    // Function to handle area click
    const handleAreaClick = (area) => {
        // Split the feedback into an array of bullet points (based on full stops or custom delimiter)
        const feedbackPoints = currentImage.feedback; // Split by period and remove empty elements
        setPopupContent(feedbackPoints);

        // Set message based on whether the title is 'Link' or not
        if (area.title === 'Link') {
            setExtraMessage(<span style={{ color: 'red' }}>SCAM!!!</span>);
        } else {
            setExtraMessage(<span style={{ color: 'green' }}>Nice Work!</span>);
        }

        setShowPopup(true);
    };

    return (
        <div className="text-scams-quiz">
            {/* Header Section */}
            <header className="text-scams-quiz-header">
                <h1>Text Scam Awareness</h1>
                <p>Challenge yourself and see how much you know about identifying text scams!</p>
            </header>

            {/* Instruction Section */}
            <div className="text-scams-quiz-instructions">
                <p>
                    Imagine you receive an email with a link or clickable buttom. What would you do next?
                </p>
                <ul>
                    <li>Would you delete or ignore the email right away?</li>
                    <li>Or would you click the link or the buttom without checking if it's legitimate?</li>
                </ul>
                <p>
                    Click on the image below as if you're making the choice in real life. Choose wisely—what's the safest action. Make your choice in this quiz!
                </p>
            </div>

            {/* Scenario Section */}
            <div className="text-scams-quiz-scenario">
                <h2>{currentImage.title}</h2>
                <div className='text-scams-image-container'>
                    <img
                        src={currentImage.img}
                        alt="Real life text scam scenario"
                        className="scenario-image"
                    />

                    {/* Dynamically create clickable areas */}
                    {currentImage.areas.map((area, index) => (
                        <div
                            key={index}
                            className="clickable-area"
                            style={{
                                top: area.top,
                                left: area.left,
                                right: area.right,
                                width: area.width,
                                height: area.height,
                            }}
                            onClick={() => handleAreaClick(area)}
                        // onClick={handleAreaClick}
                        ></div>
                    ))}
                    {/* Clickable area over 'Messages' */}
                    {/* <div
                        className="clickable-area"
                        style={{ top: '70px', left: '32px', width: '30px', height: '40px' }}
                        onClick={() => handleAreaClick("This is the 'Messages' button.")}
                    ></div> */}

                    {/* Clickable area over 'Delete' */}
                    {/* <div
                        className="clickable-area"
                        style={{ top: '20px', right: '0px', width: '30px', height: '22px' }}
                        onClick={() => handleAreaClick("This is the 'Delete' button.")}
                    ></div> */}

                    {/* Clickable area over 'Link' */}
                    {/* <div
                        className="clickable-area"
                        style={{ top: '375px', left: '280px', width: '115px', height: '30px' }}
                        onClick={() => handleAreaClick("This is the 'Link' area.")}
                    ></div>
                    <div
                        className="clickable-area"
                        style={{ top: '590px', right: '315px', width: '135px', height: '25px' }}
                        onClick={() => handleAreaClick("This is the 'Link' area.")}
                    ></div> */}

                </div>
                <button onClick={changeImage} className="change-image-button">
                    Next Scenario
                </button>

                {/* Popup Modal */}
                {showPopup && (
                    <div className="popup-modal">
                        <div className="popup-content">
                            <ul>
                                <h1>{extraMessage}</h1>
                                <h2>Explanation:</h2>
                                {popupContent.map((point, index) => (
                                    <li key={index}>{point.trim()}</li> // Trim to remove extra spaces
                                ))}
                            </ul>
                            <button onClick={() => setShowPopup(false)} className="close-popup-button">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmailScamsQuiz;
