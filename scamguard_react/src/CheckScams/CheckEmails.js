import React, { useState } from 'react';
import './CheckEmails.css'; // Import the CSS file

const CheckEmails = ({ onSubmit }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      senderName,
      senderEmail,
      emailSubject,
      emailBody,
    };
    onSubmit(emailData); // Pass the data to parent component for API submission
    alert("Checking for scam...");
  };

  return (
    <form className="check-emails-form" onSubmit={handleSubmit}>
      <div className="check-emails-form-group">
        <label>Enter Sender Name</label>
        <input
          type="text"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="Click and type the Sender's name here..."
          className="input-field"
        />
      </div>

      <div className="check-emails-form-group">
        <label>Enter Sender Email Address</label>
        <input
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          placeholder="Click and type the Sender's email address here..."
          className="input-field"
        />
      </div>

      <div className="check-emails-form-group">
        <label>Enter Email Subject</label>
        <input
          type="text"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
          placeholder="Click and type the email's subject here..."
          className="input-field"
        />
      </div>

      <div className="check-emails-form-group">
        <label>Enter Email Body</label>
        <textarea
          value={emailBody}
          onChange={(e) => setEmailBody(e.target.value)}
          placeholder="Click and type the email's body here..."
          className="textarea-field"
        ></textarea>
      </div>

      <button className="submit-button" type="submit">Check If Scam</button>
    </form>
  );
};

export default CheckEmails;
