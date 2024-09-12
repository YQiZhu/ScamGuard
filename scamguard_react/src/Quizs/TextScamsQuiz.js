import React, { useState } from 'react';
import './TextScamsQuiz.css'; // Assuming you want to use external CSS for styling

const TextScamsQuiz = () => {

  const images = [
     {title: 'Scenario 1', img:'/images/reallife_scenario/text_scams/Text Scenario 1.png'},
    {title: 'Scenario 2', img:'/images/reallife_scenario/text_scams/Text Scenario 2.png'},
    {title: 'Scenario 3', img:'/images/reallife_scenario/text_scams/Text Scenario 3.png'},
    {title: 'Scenario 4', img:'/images/reallife_scenario/text_scams/Text Scenario 4.png'},
    {title: 'Scenario 5', img:'/images/reallife_scenario/text_scams/Text Scenario 5.png'}
  ];

  // State to store the current image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the image randomly
  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  return (
    <div className="text-scams-quiz">
      {/* Header Section */}
      <header className="text-scams-quiz-header">
        <h1>Text Scams</h1>
        <p>Let’s test your knowledge on scam types and related stuffs!</p>
      </header>

      {/* Instruction Section */}
      <div className="text-scams-quiz-instructions">
        <p>
          Imagine you receive a text message with a link. What would you do?
        </p>
        <ul>
          <li>Would you delete it right away if it seems suspicious?</li>
          <li>Or would you click on the link without hesitation?</li>
        </ul>
        <p>
          Consider your safety and think carefully before you act. Make your choice in this quiz!
        </p>
      </div>

      {/* Scenario Section */}
      <div className="text-scams-quiz-scenario">
        <h2>{currentImage.title}</h2>
        <img src={currentImage.img} alt="Real life text scam scenario" className="scenario-image" />

        <button onClick={changeImage} className="change-image-button">
          Change Image
        </button>
        {/* <div className="text-scams-quiz-message-box">
          <div className="text-scams-quiz-message-header">
            <span>&lt; Messages</span>
            <span>AusPost</span>
            <span className="text-scams-quiz-delete-button">Delete</span>
          </div>
          <div className="text-scams-quiz-message-body">
            <p>
              <strong>Message (Today) PM 12:21</strong>
            </p>
            <p>
              Delivery Issue: Your package cannot be delivered. Need immediate action. Please check{' '}
              <a href="https://postdeliveryissue.info/tracking/371-34632700">this link</a>.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TextScamsQuiz;
