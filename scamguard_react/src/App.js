import logo from './logo.svg';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CurrentScamsPage from './CurrentScamsPage';  // Import the Map component
import IdentifyScamsPage from './IdentifyScamsPage'; // Import the Route component
import ReportScamsPage from './ReportScamsPage';
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

function App() {
  // Create a reference to the map section
  const mapRef = useRef(null);

  // Function to scroll to the map section
  const scrollToBottom = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>

              {/* Home Page Content */}
              <header className="App-header">
                <h1>Scam Safety for Seniors</h1>
                {/* <p>Informing you of accidents to help you cycle safely</p> */}
                <p>We care of what seniors ......</p>
                {/* <button onClick={scrollToBottom}>Go to Bottom of the Page</button> */}
              </header>
              <main>
                <section ref={mapRef} className="Desc-section">
                  <h2>What is in the website?</h2>
                  <p>
                    We w.......
                  </p>
                  {/* <img src="/images/senior.png" alt="Senior" className="senior-image" /> */}
                  
                  <p><strong>To start journey on our website, go back to the top and select on the navigation bar</strong></p>
                  <button onClick={scrollToTop}>Go to Top of the Page</button>
                </section>
              </main>
            </>
          } />
          <Route path="/currentScam" element={<CurrentScamsPage />} />
          <Route path="/identifyScam" element={<IdentifyScamsPage />} />
          <Route path="/reportScam" element={<ReportScamsPage />} />
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
      </div>
    </Router>
  );
}

export default App;