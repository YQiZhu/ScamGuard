import React, { useState } from 'react';
import './TextScamsQuiz.css'; // Assuming you want to use external CSS for styling

const TextScamsQuiz = () => {

  const images = [
     {title: 'Scenario 1', img:'/images/reallife_scenario/text_scams/Text Scenario 1.png', feedback: "Explanation: Unfamiliar Link: The URL (post.deliverypackage.info) is unfamiliar and not from a legitimate delivery service. Urgent Language: Scammers use pressure tactics like “immediate action.” Unexpected Message: If you weren’t expecting a package, it’s likely fake. If you're concerned about a real delivery, contact the company directly via their official website or customer service."},
    {title: 'Scenario 2', img:'/images/reallife_scenario/text_scams/Text Scenario 2.png', feedback: "Explanation: The .buzz domain is not typically used for legitimate business websites, especially for toll companies, which usually use .com, .com.au, or .gov.au. The domain (collections-service-au.buzz) doesn’t match LINKT’s official domain, which would be something like linkt.com.au. You can log in to the official website to check for any overdue payments or tolls without the risk of being directed to a fraudulent site."},
    {title: 'Scenario 3', img:'/images/reallife_scenario/text_scams/Text Scenario 3.png', feedback: "Explanation: The URL uses 'Medicaid' instead of 'Medicare,' which is a common tactic scammers use to confuse recipients. Government-related websites in Australia typically end in '.gov.au' instead of '.com.' Legitimate Medicare communication would use a secure, official domain."},
    {title: 'Scenario 4', img:'/images/reallife_scenario/text_scams/Text Scenario 4.png', feedback: "Explanation: The fake link appears legitimate, but the domain is slightly altered (e.g., 'verify-link.co' instead of a real Auspost domain). It creates a sense of urgency by telling her that her package won't be delivered without immediate action. Scammers often use  this tactic to trick people into revealing personal information."},
    {title: 'Scenario 5', img:'/images/reallife_scenario/text_scams/Text Scenario 5.png', feedback: "Explanation: If you haven't entered a lottery, it's highly suspicious. The link contains unusual elements (e.g., 'Qlty') that aren't typical for legitimate websites. The message contains poor phrasing ('redeem the price'), which is unprofessional for a legitimate lottery organisation."},
    {title: 'Scenario 5', img:'/images/reallife_scenario/text_scams/Text Scenario 6.png', feedback: "Explanation: It pressures you to act quickly, a common scam tactic. Claims a new number is needed because the old phone died, a typical scammer excuse. It suggests moving the conversation to WhatsApp, isolating you on a less monitored platform. The message doesn’t include specific details about you or the sender, typical of mass scam messages."}
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
        <h1>Text Scam Awareness</h1>
        <p>Challenge yourself and see how much you know about identifying text scams!</p>
      </header>

      {/* Instruction Section */}
      <div className="text-scams-quiz-instructions">
        <p>
          Imagine you receive a text message with a link or phone number. What would you do next?
        </p>
        <ul>
          <li>Would you delete the message right away?</li>
          <li>Or would you click the link without checking if it's legitimate?</li>
        </ul>
        <p>
          Click on the image below as if you're making the choice in real life. Choose wisely—what's the safest action. Make your choice in this quiz!
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
