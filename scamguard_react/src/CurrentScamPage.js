import React, { useRef } from 'react';
import CurrentScam from './CurrentScam';  // Import the Map component


const CurrentScamPage = () => {
    // Create a reference to the section
    const mapRef = useRef(null);

    // Function to scroll to the section
    const scrollToMap = () => {
        mapRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">

            {/* Introduction Section */}
            {/* <header className="App-header">
                <h1>Melbourne CBD Cycling Safety</h1>
                <p>Informing you of accidents to help you cycle safely</p>
                <button onClick={scrollToMap}>Go to Map</button>
            </header> */}

            {/* Main Content */}
            <main>
                {/* Map Section */}
                <section ref={mapRef} className="Chart-section">
                    <h2>Current Scams</h2>
                    <p></p>
                    <CurrentScam />
                </section>
            </main>
        </div>
    );
};

export default CurrentScamPage;