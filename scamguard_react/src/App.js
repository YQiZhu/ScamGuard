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
                <p>Welcome to ScamGuard, your go-to resource for staying safe from online scams. We're here to help seniors navigate the digital world securely, offering valuable insights into the latest scams and practical tips to protect yourself.</p>
              </header>
              <main>
                <section className="Desc-section">
                  <h2>What is on this website?</h2>
                  {/* <img
                    src={require('./images/think.png')}
                    alt="think"
                  /> */}
                  <p><strong>Stay Informed:</strong> Get up-to-date information on the most recent scams targeting seniors. Our team regularly updates the site to keep you informed about the latest fraud techniques and tactics.</p>
  
                  <p><strong>Learn About Scams:</strong> Discover the different types of scams, from phone fraud to online phishing, email scams, and even tech support scams. We provide detailed descriptions so you can recognize the warning signs.</p>
  
                  <p><strong>Protect Yourself:</strong> Access easy-to-follow guides and advice to safeguard your personal and financial information from scammers. We offer step-by-step instructions to help you strengthen your online security and avoid common pitfalls.</p>
  
                  <p><strong>Stay Secure with Tools and Resources:</strong> Take advantage of our downloadable checklists, videos, and tips for staying safe online. Whether you need to secure your devices, learn about privacy settings, or recognize a phishing email, we’ve got you covered.</p>
  
                  <p><strong>Ready to explore?</strong> To start your journey, scroll up and click on the navigation bar to access all the resources and tools you need to stay safe.</p>

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
