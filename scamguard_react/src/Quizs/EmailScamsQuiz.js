import React, { useState } from 'react';
import './TextScamsQuiz.css'; // Assuming you want to use external CSS for styling

const EmailScamsQuiz = () => {

    const images = [
        {
            title: 'Scenario 1', img: '/images/reallife_scenario/email_scams/Scam-email1.png',
            feedback: [
                "Unfamiliar Link: The URL (post.deliverypackage.info) is unfamiliar and not from a legitimate delivery service.",
                "Urgent Language: Scammers use pressure tactics like “immediate action.” ",
                "Unexpected Message: If you weren’t expecting a package, it’s likely fake. If you're concerned about a real delivery, contact the company directly via their official website or customer service."
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
            feedback: ["The .buzz domain is not typically used for legitimate business websites, especially for toll companies, which usually use .com, .com.au, or .gov.au. The domain (collections-service-au.buzz) doesn’t match LINKT’s official domain, which would be something like linkt.com.au. You can log in to the official website to check for any overdue payments or tolls without the risk of being directed to a fraudulent site."
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
                "The URL uses 'Medicaid' instead of 'Medicare,' which is a common tactic scammers use to confuse recipients. Government-related websites in Australia typically end in '.gov.au' instead of '.com.' Legitimate Medicare communication would use a secure, official domain."
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
                "The fake link appears legitimate, but the domain is slightly altered (e.g., 'verify-link.co' instead of a real Auspost domain). It creates a sense of urgency by telling her that her package won't be delivered without immediate action. Scammers often use  this tactic to trick people into revealing personal information."
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
