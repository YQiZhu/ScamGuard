import React, { useState, useRef } from 'react';
import './TextScamsQuiz.css'; // Assuming you want to use external CSS for styling
import { useNavigate } from 'react-router-dom';

const TextScamsQuiz = () => {

  const images = [
    {
      title: 'Scenario 1', img: '/images/reallife_scenario/text_scams/Text Scenario 1.png',
      feedback: [
        "The URL (post.deliverypackage.info) is unfamiliar and not from a legitimate delivery service.",
        "Scammers use pressure tactics like “immediate action.” ",
        "If you weren’t expecting a package, it’s likely fake. If you're concerned about a real delivery, contact the company directly via their official website or customer service."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '305px', left: '125px', width: '470px', height: '30px' },
        { title: 'Link', top: '340px', left: '38px', width: '280px', height: '30px' },
      ] //done
    },
    {
      title: 'Scenario 2', img: '/images/reallife_scenario/text_scams/Text Scenario 2.png',
      feedback: [
        "The .buzz domain is not typically used for legitimate business websites, especially for toll companies, which usually use .com, .com.au, or .gov.au.",
        "The domain (collections-service-au.buzz) doesn’t match LINKT’s official domain, which would be something like linkt.com.au.",
        "You can log in to the official website to check for any overdue payments or tolls without the risk of being directed to a fraudulent site."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '320px', left: '75px', width: '520px', height: '30px' },
      ] // done
    },
    {
      title: 'Scenario 3', img: '/images/reallife_scenario/text_scams/Text Scenario 3.png',
      feedback: [
        "The URL uses 'Medicaid' instead of 'Medicare,' which is a common tactic scammers use to confuse recipients.",
        "Government-related websites in Australia typically end in '.gov.au' instead of '.com'.",
        "Legitimate Medicare communication would use a secure, official domain."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '305px', left: '35px', width: '490px', height: '30px' },
      ] //done
    },
    {
      title: 'Scenario 4', img: '/images/reallife_scenario/text_scams/Text Scenario 4.png',
      feedback: [
        "The fake link appears legitimate, but the domain is slightly altered (e.g., 'verify-link.co' instead of a real Auspost domain).",
        "It creates a sense of urgency by telling her that her package won't be delivered without immediate action.",
        "Scammers often use  this tactic to trick people into revealing personal information."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '445px', left: '35px', width: '535px', height: '32px' },
        { title: 'Link', top: '480px', left: '35px', width: '140px', height: '32px' },
      ]
    },
    {
      title: 'Scenario 5', img: '/images/reallife_scenario/text_scams/Text Scenario 5.png',
      isLegitimate: true,
      feedback: [
        "If you haven't entered a lottery, it's highly suspicious.",
        "The link contains unusual elements (e.g., 'Qlty') that aren't typical for legitimate websites.",
        "The message contains poor phrasing ('redeem the price'), which is unprofessional for a legitimate lottery organisation."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '375px', left: '35px', width: '580px', height: '30px' },
      ] // done
    },
    {
      title: 'Scenario 6', img: '/images/reallife_scenario/text_scams/Text Scenario 6.png',
      feedback: [
        "It pressures you to act quickly, a common scam tactic.",
        "Claims a new number is needed because the old phone died, a typical scammer excuse.",
        "It suggests moving the conversation to WhatsApp, isolating you on a less monitored platform.",
        "The message doesn’t include specific details about you or the sender, typical of mass scam messages."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '342px', left: '165px', width: '190px', height: '32px' },
      ] // done
    },
    {
      title: 'Scenario 7', img: '/images/reallife_scenario/text_scams/Text Scenario 7.png',
      isLegitimate: true,
      feedback: [
        "Includes a clear date, time, and location for the medical appointment.",
        "Bupa is a well-known healthcare provider, and the link points to their official site 'bupamvs.com.au'.",
        "Standard requirement to bring a passport."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '425px', left: '230px', width: '235px', height: '32px' },
      ] // done
    },
    {
      title: 'Scenario 8', img: '/images/reallife_scenario/text_scams/Text Scenario 8.png',
      isLegitimate: true,
      feedback: [
        " It informs the user to ignore the message if it wasn’t expected, a typical feature of legitimate messages.",
        "The URL points to 'app.optus.com.au', which is Optus's official domain."
      ],
      areas: [
        { title: 'Delete', top: '40px', right: '37px', width: '83px', height: '35px' },
        { title: 'Message', top: '40px', left: '20px', width: '150px', height: '35px' },
        { title: 'Link', top: '390px', left: '35px', width: '390px', height: '32px' },
        { title: 'Link', top: '425px', left: '35px', width: '525px', height: '32px' },
        { title: 'Link', top: '460px', left: '35px', width: '200px', height: '32px' },
      ] // done
    }
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

  const currentImage = images[currentIndex];

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
      scenarioRef.current.scrollIntoView({ behavior: 'smooth' });
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

  // Function to handle closing the popup and scroll to the Next Scenario button
  const closePopup = () => {
    setShowPopup(false);

    // Scroll down to the Next Scenario button
    if (nextButtonRef.current) {
      nextButtonRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <h1>Text Scam Awareness</h1>
        <p>Challenge yourself and see how much you know about identifying text scams!</p>
      </header>

      {/* Instruction Section */}
      <div className="text-scams-quiz-instructions">
        <p>
          Imagine you receive a text message with a link or phone number. What would you do next?
        </p>
        <ul>
          <li>Would you delete or ignore the message right away?</li>
          <li>Or would you click the link without checking if it's legitimate?</li>
        </ul>
        <p>
          Click on the image below as if you're making the choice in real life. Choose wisely—what's the safest action. Make your choice in this quiz!
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
            // onClick={handleAreaClick}
            ></div>
          ))}
          {/* Clickable area over 'Messages' */}
          {/* <div
            className="clickable-area"
            style={{ top: '40px', left: '20px', width: '120px', height: '35px' }}
            onClick={() => handleAreaClick("This is the 'Messages' button.")}
          ></div> */}

          {/* Clickable area over 'Delete' */}
          {/* <div
            className="clickable-area"
            style={{ top: '40px', right: '30px', width: '75px', height: '35px' }}
            onClick={() => handleAreaClick("This is the 'Delete' button.")}
          ></div> */}

          {/* Clickable area over 'Link' */}
          {/* <div
            className="clickable-area"
            style={{ top: '410px', left: '30px', width: '535px', height: '32px' }}
            onClick={() => handleAreaClick("This is the 'Link' area.")}
          ></div> */}
          {/* <div
            className="clickable-area"
            style={{ top: '280px', left: '200px', width: '310px', height: '30px' }}
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

export default TextScamsQuiz;
