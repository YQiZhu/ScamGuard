import React, { useState, useRef } from 'react';
import './TextScamsQuiz.css'; // Assuming you want to use external CSS for styling
import { useNavigate } from 'react-router-dom';

const EmailScamsQuiz = () => {

    const images = [
        {
            title: 'Scenario 1', img: '/images/reallife_scenario/email_scams/Scam-email1.png',
            feedback: [
                "Suspicious Sender: The email comes from 'icloudsecure.co', not a legitimate Apple domain.",
                "Grammar Issues: There are noticeable errors, like 'you photos and videos,' which is uncommon for official emails.",
                "Urgency Tactic: The message pressures you to act quickly, a common scam strategy.",
                "Fake Links: The 'upgrade' link may lead to a phishing site. Always verify URLs before clicking.",
                "Always check directly through official websites when in doubt."
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '370px', right: '245px', width: '115px', height: '25px', link: 'http://icloud-storage-upgrade.com' },
                { title: 'Link', top: '410px', left: '240px', width: '310px', height: '25px', link: 'http://icloud.secure.me' },
            ] //done
        },
        {
            title: 'Scenario 2', img: '/images/reallife_scenario/email_scams/Scam-email2.png',
            feedback: [
                "Suspicious Sender: It's from a Gmail account, not a legitimate '@paypal.com' domain.",
                "Unexpected Payment: If you didn't make a $35 payment, it's likely fake.",
                "Urgency to Click: The 'Activate PayPal Now' button creates urgency, potentially leading to a phishing site.",
                "Always verify by logging directly into your PayPal account, rather than clicking email links."
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '544px', left: '342px', width: '115px', height: '25px', link: 'http://paypal-account-secure-confirm.com' },
                { title: 'Link', top: '590px', right: '315px', width: '135px', height: '25px', link: 'http://paypal-purchase-details-review.com' },
            ] // done
        },
        {
            title: 'Scenario 3', img: '/images/reallife_scenario/email_scams/Scam-email3.png',
            isLegitimate: true,
            feedback: [
                "The email is from 'no-reply@amazon.com', which matches Amazon's official domain.",
                "includes specific order details, and has standard Amazon features like a 'View or manage order' button.",
                "There's no request for personal info or payment."
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '379px', left: '291px', width: '100px', height: '26px', link: 'https://www.amazon.com/' },
            ] //legitmate
        },
        {
            title: 'Scenario 4', img: '/images/reallife_scenario/email_scams/Scam-email4.png',
            feedback: [
                "Suspicious Sender: It uses 'sharep0int@sharep0int.com' with a zero, mimicking the real SharePoint domain.",
                "File Access: 'Employee Bonuses' should be personalized, yet the email states, 'This link will work for anyone,' which is suspicious.",
                "Fake Branding: The 'Minisoft' logo instead of Microsoft is suspicious.",
                "To stay safe, avoid clicking the link, and if you're unsure about the file, contact the sender directly or verify through official channels like your company's SharePoint system."
            ],
            areas: [
                { title: 'Delete', top: '70px', left: '32px', width: '30px', height: '40px' },
                { title: 'Close', top: '20px', right: '0px', width: '30px', height: '22px' },
                { title: 'Link', top: '570px', left: '340px', width: '115px', height: '25px', link: 'http://sharep0int-files-portal.com/open-docs' },
            ]
        },
        {
            title: 'Scenario 5', img: '/images/reallife_scenario/email_scams/normal_email_1.png',
            isLegitimate: true,
            feedback: [
                "From no-reply@dropboxmail.com which is the official domain",
                "Contains standard Dropbox storage limit info.",
                "Includes Dropbox logo and familiar branding elements.",
                "Simply informs about storage limits and offers standard options for upgrading."
            ],
            areas: [
                { title: 'Link', top: '435px', left: '390px', width: '130px', height: '25px', link: 'https://www.dropbox.com/business' },
                { title: 'Link', top: '340px', left: '312px', width: '95px', height: '22px', link: 'https://www.dropbox.com/login' },
                { title: 'Link', top: '290px', left: '335px', width: '130px', height: '30px', link: 'https://help.dropbox.com/storage-space/get-more-space' },
            ]
        },
        {
            title: 'Scenario 6', img: '/images/reallife_scenario/email_scams/normal_email_2.png',
            isLegitimate: true,
            feedback: [
                "Sender address matches Redmond Channel Partner’s domain.",
                "The email uses clear, professional branding and includes a clear call to action (webinar registration).",
                "The links lead to familiar actions, such as webinar registration, with no urgency or strange requests."
            ],
            areas: [
                { title: 'Delete', top: '70px', right: '32px', width: '25px', height: '20px' },
                { title: 'Close', top: '70px', right: '68px', width: '25px', height: '20px' },
                { title: 'Link', top: '490px', left: '340px', width: '130px', height: '25px', link: 'https://rcpmag.com/Home.aspx' },
            ]
        },
        {
            title: 'Scenario 7', img: '/images/reallife_scenario/email_scams/normal_email_3.png',
            isLegitimate: true,
            feedback: [
                "The email is from invoicereminders@post.xero.com, which matches Xero's invoicing system domain.",
                "It includes an invoice number, amount, and due date, which are typical in billing reminders.",
                "The email provides a direct link to view the invoice and payment options.",
                "The message is courteous and professional, without urgent or suspicious requests."
            ],
            areas: [
                { title: 'Delete', top: '70px', right: '32px', width: '25px', height: '20px' },
                { title: 'Close', top: '70px', right: '68px', width: '25px', height: '20px' },
                { title: 'Link', top: '180px', left: '190px', width: '105px', height: '25px', link: 'https://www.electricalcontractor.com.au/' },
                { title: 'Link', top: '355px', left: '190px', width: '325px', height: '15px', link: 'https://in.xero.com/oY8zP3TUYDgSwb296zotAwydQXhdxKmDVEzM.' },
            ]
        },
    ];

    const scenarioRef = useRef(null); // Create a ref for the scenario section
    const nextButtonRef = useRef(null); // Create a ref for the Next Scenario button

    const navigate = useNavigate();

    // State to store the current image
    // const [currentImage, setCurrentImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [popupContent, setPopupContent] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [extraMessage, setExtraMessage] = useState('');
    const [hoveredLink, setHoveredLink] = useState(null);

    const currentImage = images[currentIndex];
    const quizzesLeft = images.length - currentIndex - 1; // Calculate how many quizzes are left

    // Function to change the image randomly
    const changeImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1); // Move to the next scenario
        } else {
            // Optionally, reset or do something when the last scenario is reached
            setCurrentIndex(0); // Loop back to the first scenario, or handle it differently
        }
        setShowPopup(false);

        // Scroll back to the scenario section
        if (scenarioRef.current) {
            window.scrollTo({
                top: scenarioRef.current.offsetTop - 60, // Adjust above the element
                behavior: 'smooth',
            });
            // scenarioRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to handle area click
    const handleAreaClick = (area) => {
        // Split the feedback into an array of bullet points (based on full stops or custom delimiter)
        const feedbackPoints = currentImage.feedback; // Split by period and remove empty elements
        setPopupContent(feedbackPoints);

        let isLegitimate = currentImage.isLegitimate || false

        // Set message based on whether the title is 'Link' or not
        if (area.title === 'Link' && isLegitimate == false) {
            setExtraMessage(<span style={{ color: 'red' }}>SCAM!!!</span>);
        } else {
            setExtraMessage(<span style={{ color: 'green' }}>Nice Work!</span>);
        }

        setShowPopup(true);
    };

    // Function to handle mouse enter for the link area (hover event)
    const handleMouseEnter = (area) => {
        if (area.title === 'Link') {
            setHoveredLink(area.link); // Display the link when hovered
        }
    };

    // Function to handle mouse leave from the link area
    const handleMouseLeave = () => {
        setHoveredLink(null); // Hide the link when the mouse leaves
    };

    // Function to handle closing the popup and scroll to the Next Scenario button
    const closePopup = () => {
        setShowPopup(false);

        // Scroll down to the Next Scenario button
        if (nextButtonRef.current) {
            window.scrollTo({
                top: nextButtonRef.current.offsetTop - 60, // Adjust above the element
                behavior: 'smooth',
            });
            // nextButtonRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to go back to the previous page
    const goBack = () => {
        navigate(-1); // This will navigate back to the previous page
        // navigate('/identifyScam')
    };

    return (
        <div className="text-scams-quiz">
            {/* Header Section */}
            <header className="text-scams-quiz-header">
                <button onClick={goBack}>Back to Pervious Page</button>
                <h1>Email Scam Awareness</h1>
                <p>Challenge yourself and see how much you know about identifying text scams!</p>
            </header>

            {/* Instruction Section */}
            <div className="text-scams-quiz-instructions">
                <p>
                    You receive a text or email with a link or phone number. What will you do next?
                </p>
                <ul>
                    <li>Delete or ignore the message?</li>
                    <li>Click the link without checking if it's safe?</li>
                </ul>
                <p>
                    Click the red highlighted area below to make your choice, just like you would in real life. Choose wisely — test your scam awareness!
                </p>
            </div>

            {/* Scenario Section */}
            <div className="text-scams-quiz-scenario" ref={scenarioRef}>
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
                            onMouseEnter={() => handleMouseEnter(area)}
                            onMouseLeave={handleMouseLeave}
                        // onClick={handleAreaClick}
                        ></div>
                    ))}

                    {/* Display hovered link in a popup or tooltip */}
                    {hoveredLink && (
                        <div className="hovered-link-popup">
                            <p>{hoveredLink}</p>
                        </div>
                    )}
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
                <div className="scenario-btn-group">
                    {currentIndex < images.length - 1 ? (
                        <button ref={nextButtonRef} onClick={changeImage} className="change-image-button">
                            Next Scenario
                        </button>) : (
                        <p>
                            You have reached the end of quizzes
                            <button ref={nextButtonRef} onClick={changeImage} className="change-image-button">
                                Retake quizzes
                            </button>
                        </p>
                    )}
                </div>

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
                            <div className="popup-content-btn">
                                {/* <button onClick={changeImage} className="change-image-button">
                                    Next Scenario
                                </button> */}

                                {currentIndex < images.length - 1 ? (
                                    <div className="scenario-btn-group">
                                        <button ref={nextButtonRef} onClick={changeImage} className="change-image-button">
                                            Next Scenario
                                        </button>
                                        <button onClick={closePopup} className="close-popup-button">
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <div className="scenario-btn-group">
                                        <p>
                                            You have reached the end of quizzes
                                            <div >
                                                <button ref={nextButtonRef} onClick={changeImage} className="change-image-button">
                                                    Retake quizzes
                                                </button>
                                                <button onClick={closePopup} className="close-popup-button">
                                                    Close
                                                </button>
                                            </div>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <footer className='quiz-footer-container'>
                <div className='quiz-footer'>
                    <h2>What's Next?</h2>
                    <div className='quiz-footer-btn-group'>
                        <button
                            onClick={() => navigate('/identifyScam')}
                        >
                            Learn more about scams
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
};

export default EmailScamsQuiz;
