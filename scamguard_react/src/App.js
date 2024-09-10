import logo from './logo.svg';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CurrentScamsPage from './CurrentScamsPage';
import IdentifyScamsPage from './IdentifyScamsPage';
import ReportScamsPage from './ReportScamsPage';
import WhatToDoPage from './WhatToDoPage';
import CheckScamsPage from './CheckScamsPage';
import RiskAssessmentPage from './RiskAssessmentPage';
import QuizPage from './QuizPage';
import Header from './Header';
import PhoneScams from './IdentifyScams/PhoneScams';
import TextScams from './IdentifyScams/TextScams';
import EmailScams from './IdentifyScams/EmailScams';
import SocialMediaScams from './IdentifyScams/SocialMediaScams';
import WebsiteScams from './IdentifyScams/WebsiteScams';
import RomanceScams from './IdentifyScams/RomanceScams';
import InvestmentScams from './IdentifyScams/InvestmentScams';
import ProductAndServiceScams from './IdentifyScams/ProductAndServiceScams';
import JobScams from './IdentifyScams/JobScams';
import ImpersonationScams from './IdentifyScams/ImpersonationScams';
import ReferencePage from './ReferencePage';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component


function App() {
  // useScrollToTop(); // Call the hook here, inside the Router

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>

              {/* Home Page Content */}
              <header className="App-header">
                <h1>ScamGuard</h1>
                <p>Welcome to ScamGuard, your go-to resource for staying safe from online scams.</p>
                <p>We're here to help seniors navigate the digital world securely, offering valuable insights into the latest scams and practical tips to protect yourself.</p>
              </header>
              <main>
                <section className="Desc-section">
                  <h2>What is on this website?</h2>
                  {/* <img
                    src={require('./images/think.png')}
                    alt="think"
                  /> */}
                  <h3>Learn About Scams</h3>
                  <p>Our website will have easy explanations and pictures showing different types of scams. This will help you understand what scams look like and how to spot them.</p>
 
                  <h3>Report Scams and Get Help</h3>
                  <p>If you come across a scam or become a victim, you can use our tools to report it. We'll guide you on how to protect yourself and help fight against scams.</p>
  
                  <h3>Practice Spotting Scams</h3>
                  <p>We'll offer simple exercises to help you practice recognizing scams. You can try these exercises to become more confident in avoiding scams.</p>
                    
                  <h3>Check Your Scam Risk</h3>
                  <p>We have a tool where you can enter some details about yourself and your online activities. It will show how likely you are to be targeted by scams and what steps you can take to stay safe.</p>

                  <h3>Verify Messages</h3>
                  <p>We will help you check if messages you receive online are real or scams. This will help you feel sure that the messages you get are trustworthy.</p>

                  <h3>Create Scam Awareness Posters</h3>
                  <p>You can use our tool to make your own scam awareness posters. You can print these out to keep reminders at home or share them with friends and family to help everyone stay informed.</p>
                    
                  <p><strong>Ready to explore? To start your journey, scroll up and click on the navigation bar to access all the resources and tools you need to stay safe.</strong></p>

                  <button onClick={scrollToTop}>Go to Top of the Page</button>
                </section>
              </main>
            </>
          } />
          <Route path="/references" element={<ReferencePage />} />
          <Route path="/currentScam" element={<CurrentScamsPage />} />
          <Route path="/identifyScam" element={<IdentifyScamsPage />} />
          <Route path="/reportScam" element={<ReportScamsPage />} />
          <Route path="/whatToDo" element={<WhatToDoPage />} />
          <Route path="/checkScam" element={<CheckScamsPage />} />
          <Route path="/riskAssessment" element={<RiskAssessmentPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/phone-scams" element={<PhoneScams />} />
          <Route path="/text-scams" element={<TextScams />} />
          <Route path="/email-scams" element={<EmailScams />} />
          <Route path="/social-media-scams" element={<SocialMediaScams />} />
          <Route path="/website-scams" element={<WebsiteScams />} />
          <Route path="/romance-scams" element={<RomanceScams />} />
          <Route path="/product-and-service-scams" element={<ProductAndServiceScams />} />
          <Route path="/investment-scams" element={<InvestmentScams />} />
          <Route path="/job-scams" element={<JobScams />} />
          <Route path="/impersonation-scams" element={<ImpersonationScams />} />

        </Routes>
        <Footer />

        {/* Scroll to Top Icon */}
        <div className="scroll-to-top" onClick={scrollToTop}>
          {/* ⬆️ */}
          ↑
        </div>
      </div>
    </Router>
  );
}

export default App;
