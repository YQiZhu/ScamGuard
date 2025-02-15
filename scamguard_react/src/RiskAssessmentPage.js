import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [demographicData, setDemographicData] = useState([]);
    const [isSubmittedDemographic, setIsSubmittedDemographic] = useState(false);
    const [isLoadingDemographic, setIsLoadingDemographic] = useState(false);   // To track loading

    // State for error messages
    const [contactMethodError, setContactMethodError] = useState('');
    const [demographicError, setDemographicError] = useState('');

    const contactMethods = ['Email', 'Phone call', 'Text message'];
    const genders = ['Female', 'Male'];
    const locations = ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'];

    const navigate = useNavigate();
    
    // Handle Contact Method form submission
    const handleSubmitContactMethod = (e) => {
        e.preventDefault();
        if (!contactMethod) {
            setContactMethodError('Please select a contact method.');
            return;
        }
        setContactMethodError('');  // Clear error message if valid
        setIsSubmittedContactMethod(true);
        setIsLoadingContactMethod(true);  // Start loading

        // Prepare form data for contact method API
        const formData = { contact_method: contactMethod };

        // Call the contact method risk API
        axios.post('https://scamguard.live/api/contact_method_risk/', formData)
            .then((response) => {
                setContactMethodData(response.data);
                console.log('Contact Method Data:', response.data);
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
        if (!gender || !location) {
            setDemographicError('Please fill in all demographic fields.');
            return;
        }
        setDemographicError('');  // Clear error message if valid
        setIsSubmittedDemographic(true);
        setIsLoadingDemographic(true);  // Start loading

        // Prepare form data for demographic risk API
        const formData = {
            gender: gender,
            location: location,
            age_group: '65 and over',
        };
        console.log('Data:', formData);

        // Call the demographic risk API
        axios.post('https://scamguard.live/api/demographic_risk/', formData)
            .then((response) => {
                console.log('Demographic Data:', response.data);  // Check if it's an array
                setDemographicData(response.data);
                setIsLoadingDemographic(false);
            })
            .catch((error) => {
                console.error('Error fetching Demographic Risk:', error);
                setIsLoadingDemographic(false);
            });

    };

    return (
        <div className="ScamRiskPage">
            <header className="scam-risk-header">
                <h1>Scams Risk Assessment</h1>
                <p>Informing you of the most possible scams you will meet</p>
            </header>

            <main className="main-session-assessment">
                <section className="scam-risk-analysis-form">
                    {/* Contact Method Risk Form */}
                    <h2>Choose your contact method to assess scam risks.</h2>
                    <form onSubmit={handleSubmitContactMethod} className="contact-risk-form">
                        <div className="scam-risk-form-group">
                            <label>Contact Methods</label>
                            <select onChange={(e) => setContactMethod(e.target.value)} value={contactMethod}>
                                <option value="" disabled>Select ...</option>
                                {contactMethods.map((method, index) => (
                                    <option key={index} value={method}>{method}</option>
                                ))}
                            </select>
                        </div>
                        <div className="scam-risk-error-message">{contactMethodError}</div>
                        <button type="submit" className="scam-risk-submit-btn">Submit Contact Method Risk</button>
                    </form>

                    {isLoadingContactMethod && <div className="scam-risk-loading">Loading contact method data...</div>}


                    {/* Display Contact Method Risk Chart */}
                    {isSubmittedContactMethod && !isLoadingContactMethod && Array.isArray(contactMethodData) && (
                        contactMethodData.length > 0 ? (
                            <section className="scam-chart">
                                <h3>Contact Method Risk Analysis Results</h3>
                                <ContactMethodResultsChart data={contactMethodData} />
                                <div className="scam-risk-description">
                                    {contactMethodData.map((scam, index) => (
                                        <div key={index} className="scam-risk-card">
                                            <p>
                                                Your risk of being exposed to <strong>{scam['Scam Type']}</strong> scams is <strong>{scam['Exposure Risk']} times higher</strong> than the national average when using <strong>{scam['Online Activity']}</strong>.
                                            </p>
                                            <p>
                                                The average loss for seniors is expected to be <strong>{scam['Average Loss for Seniors']}</strong>.
                                            </p>
                                            <button onClick={() => window.open(scam.link, "_blank", "noopener noreferrer")}>
                                                Learn more about <strong>{scam['Scam Type']} scam</strong>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : (
                            <div className="no-data-message">
                                <p>No higher scam exposure risks were identified for selected contact method.</p>
                            </div>
                        )
                    )}

                </section>

                <section className="scam-risk-analysis-form">
                    {/* Demographic Risk Form */}
                    <h2>Risk assessment for individuals aged 65 and over.</h2>
                    <form onSubmit={handleSubmitDemographic} className="demographic-risk-form">
                        {/* <div className="scam-risk-form-group">
                            <label>Age Group</label>
                            <select onChange={(e) => setAgeGroup(e.target.value)} value={ageGroup}>
                                <option value="" disabled>Select ...</option>
                                {ageGroups.map((age, index) => (
                                    <option key={index} value={age}>{age}</option>
                                ))}
                            </select>
                        </div> */}

                        <div className="scam-risk-form-group">
                            <label>Location</label>
                            <select onChange={(e) => setLocation(e.target.value)} value={location}>
                                <option value="" disabled>Select ...</option>
                                {locations.map((loc, index) => (
                                    <option key={index} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>

                        <div className="scam-risk-form-group">
                            <label>Gender</label>
                            <select onChange={(e) => setGender(e.target.value)} value={gender}>
                                <option value="" disabled>Select ...</option>
                                {genders.map((gen, index) => (
                                    <option key={index} value={gen}>{gen}</option>
                                ))}
                            </select>
                        </div>
                        <div className="scam-risk-error-message">{demographicError}</div>
                        <button type="submit" className="scam-risk-submit-btn">Submit Demographic Risk</button>
                    </form>

                    {/* Show loading indicator */}
                    {isLoadingDemographic && <div className="scam-risk-loading">Loading demographic data...</div>}

                    {/* Display Demographic Risk Chart */}
                    {isSubmittedDemographic && !isLoadingDemographic && Array.isArray(demographicData) && (
                        demographicData.length > 0 ? (
                            <section className="scam-chart">
                                <h3>Demographic Risk Analysis Results</h3>
                                <DemographicResultsChart data={demographicData} />
                                <div className="scam-risk-description">
                                    {demographicData.map((scam, index) => (
                                        <div key={index} className="scam-risk-card">
                                            <p>
                                                According to your demographic profile, your risk of encountering <strong>{scam['Scam Type']}</strong> is <strong>{scam['exposure_risk']} times higher</strong> than the national average.
                                            </p>
                                            <p>
                                                For individuals in your demographic group, the average financial loss for seniors is estimated to be <strong>{scam['Average Loss for Seniors']}</strong>.
                                            </p>
                                            <button onClick={() => window.open(scam.link, "_blank", "noopener noreferrer")}>
                                                Learn more about <strong>{scam['Scam Type']} scam</strong>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : (
                            <div className="no-data-message">
                                <p>No higher scam exposure risks were identified for selected demographic criteria.</p>
                            </div>
                        )
                    )}

                </section>
            </main>
            <p>
                Data obtained from <a href="https://www.scamwatch.gov.au/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Scamwatch</a> © <a href="https://au.creativecommons.net/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Commonwealth of Australia</a>
            </p>

            <footer className='risk-assessment-footer-container'>
                <div className='risk-assessment-footer'>
                    <h2>What's Next?</h2>
                    <div className='risk-assessment-footer-btn-group'>
                        <button
                            onClick={() => navigate('/identifyScam')}
                        >
                            Learn more about scams
                        </button>
                        <button
                            onClick={() => navigate('/quiz')}
                        >
                            Test you knowledge
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RiskAssessmentPage;
