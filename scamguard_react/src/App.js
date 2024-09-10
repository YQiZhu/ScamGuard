import logo from './logo.svg';
import React, { useRef } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
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
          <Route path="/" element={<HomePage scrollToTop={scrollToTop} />} />
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
