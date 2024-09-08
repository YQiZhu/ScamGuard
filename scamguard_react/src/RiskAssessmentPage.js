import React, { useRef, useState } from 'react';
import axios from 'axios';
import './RiskAssessmentPage.css';
import ContactMethodResultsChart from './RiskAssessment/ContactMethodResultsChart';  // Import chart component
import DemographicResultsChart from './RiskAssessment/DemographicResultsChart';

const RiskAssessmentPage = () => {

    // State for Contact Method form
    const [contactMethod, setContactMethod] = useState('');
    const [contactMethodData, setContactMethodData] = useState([]);
    const [isSubmittedContactMethod, setIsSubmittedContactMethod] = useState(false);
    const [isLoadingContactMethod, setIsLoadingContactMethod] = useState(false); // To track loading

    // State for Demographic Risk form
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [demographicData, setDemographicData] = useState([]);
    const [isSubmittedDemographic, setIsSubmittedDemographic] = useState(false);
    const [isLoadingDemographic, setIsLoadingDemographic] = useState(false);   // To track loading

    const contactMethods = ['Email', 'Fax', 'Internet', 'Mail', 'Mobile apps', 'Phone call', 'Social media/Online forums', 'Text message'];
    const genders = ['Female', 'Male'];
    const locations = ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'];
    const ageGroups = ['65 and over', 'All Ages'];

    // Handle Contact Method form submission
    const handleSubmitContactMethod = (e) => {
        e.preventDefault();
        setIsSubmittedContactMethod(true);
        setIsLoadingContactMethod(true);  // Start loading

        // Prepare form data for contact method API
        const formData = { contact_method: contactMethod };

        // Call the contact method risk API
        axios.post('https://scamguard.live/api/contact_method_risk/', formData)
            .then((response) => {
                setContactMethodData(response.data);
                // console.log('Contact Method Data:', response.data);
                setIsLoadingContactMethod(false);
            })
            .catch((error) => {
                console.error('Error fetching Contact Method Risk:', error);
                setIsLoadingContactMethod(false);
            });
    };

    // Handle Demographic Risk form submission
    const handleSubmitDemographic = (e) => {
        e.preventDefault();
        setIsSubmittedDemographic(true);
        setIsLoadingDemographic(true);  // Start loading

        // Prepare form data for demographic risk API
        const formData = {
            gender: gender,
            location: location,
            age_group: ageGroup,
        };

        // Call the demographic risk API
        axios.post('https://scamguard.live/api/demographic_risk/', formData)
            .then((response) => {
                // console.log('Demographic Data:', response.data);  // Check if it's an array
                setDemographicData(response.data);
                setIsLoadingDemographic(false);
            })
            .catch((error) => {
                console.error('Error fetching Demographic Risk:', error);
                setIsLoadingDemographic(false);
            });

    };

    return (
        <div>
            <header className="scam-risk-header">
                <h1>Scams Risk Assessment</h1>
                <p>Informing you of the most possible scams you will meet</p>
            </header>

            <main className="ScamRiskPage">
                <section className="analysis-form">
                    {/* Contact Method Risk Form */}
                    <h2>Contact Method Risk</h2>
                    <form onSubmit={handleSubmitContactMethod} className="risk-form">
                        <div className="form-group">
                            <label>Contact Methods</label>
                            <select onChange={(e) => setContactMethod(e.target.value)} value={contactMethod}>
                                <option value="" disabled>Select ...</option>
                                {contactMethods.map((method, index) => (
                                    <option key={index} value={method}>{method}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="submit-btn">Submit Contact Method Risk</button>
                    </form>

                    {isLoadingContactMethod && <div className="loading">Loading contact method data...</div>}


                    {/* Display Contact Method Risk Chart */}
                    {isSubmittedContactMethod && !isLoadingContactMethod && Array.isArray(contactMethodData) && contactMethodData.length > 0 && (
                        <section className="scam-chart">
                            <h3>Contact Method Risk Analysis Results</h3>
                            <ContactMethodResultsChart data={contactMethodData} />
                            {contactMethodData.map((scam, index) => (
                                <div key={index} className="scam-description">
                                    <p>{scam.text}</p>
                                    <a href={scam.link} target="_blank" rel="noopener noreferrer">Learn more about this scam</a>
                                </div>
                            ))}
                        </section>
                    )}

                </section>

                <section className="analysis-form">
                    {/* Demographic Risk Form */}
                    <h2>Demographic Risk</h2>
                    <form onSubmit={handleSubmitDemographic} className="risk-form">
                        <div className="form-group">
                            <label>Age Group</label>
                            <select onChange={(e) => setAgeGroup(e.target.value)} value={ageGroup}>
                                <option value="" disabled>Select ...</option>
                                {ageGroups.map((age, index) => (
                                    <option key={index} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <select onChange={(e) => setLocation(e.target.value)} value={location}>
                                <option value="" disabled>Select ...</option>
                                {locations.map((loc, index) => (
                                    <option key={index} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <select onChange={(e) => setGender(e.target.value)} value={gender}>
                                <option value="" disabled>Select ...</option>
                                {genders.map((gen, index) => (
                                    <option key={index} value={gen}>{gen}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="submit-btn">Submit Demographic Risk</button>
                    </form>

                    {/* Show loading indicator */}
                    {isLoadingDemographic && <div className="loading">Loading demographic data...</div>}

                    {/* Display Demographic Risk Chart */}
                    {isSubmittedDemographic && !isLoadingDemographic && Array.isArray(demographicData) && demographicData.length > 0 && (
                        <section className="scam-chart">
                            <h3>Demographic Risk Analysis Results</h3>
                            <DemographicResultsChart data={demographicData} />
                            {demographicData.map((scam, index) => (
                                <div key={index} className="scam-description">
                                    <p>{scam.text}</p>
                                    <a href={scam.link} target="_blank" rel="noopener noreferrer">Learn more about this scam</a>
                                </div>
                            ))}
                        </section>
                    )}

                </section>
            </main>

        </div>
    );
};

export default RiskAssessmentPage;
