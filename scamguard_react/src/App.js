import logo from './logo.svg';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CurrentScamPage from './CurrentScamPage';  // Import the Map component
// import RoutePage from './RoutePage'; // Import the Route component
import Header from './Header';

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
                <h1>Melbourne CBD Cycling Safety</h1>
                {/* <p>Informing you of accidents to help you cycle safely</p> */}
                <p>Informing you of accidents to help you cycle safely</p>
                {/* <button onClick={scrollToBottom}>Go to Bottom of the Page</button> */}
              </header>
              <main>
                <section ref={mapRef} className="Desc-section">
                  <h2>What is in the website?</h2>
                  <p>
                    We will provide a map showing where bicycle accidents happen in Melbourne, using colors to highlight areas with more accidents.
                    A bar chart will show the severity of accidents across the city. When users select a region on the map, the chart will update to show accident severity in that area.
                    Additionally, we will display bike routes on the map, indicating roads with bike lanes to help users find safer paths.
                  </p>
                  <img src="/images/cycling.png" alt="Cycling" className="cycling-image" />
                  
                  <p><strong>To start journey on our website, go back to the top and select on the navigation bar</strong></p>
                  <button onClick={scrollToTop}>Go to Top of the Page</button>
                </section>
              </main>
            </>
          } />
          <Route path="/currentScam" element={<CurrentScamPage />} />
          {/* <Route path="/route" element={<RoutePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;