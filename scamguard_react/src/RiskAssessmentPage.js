import React, { useRef } from 'react';
import './RiskAssessmentPage.css';
import ScamResultsChart from './RiskAssessment/ScamResultsChart';  // Import chart component

const RiskAssessmentPage = () => {

    const [contactMethod, setContactMethod] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [scamData, setScamData] = useState([]);

    const contactMethods = ['Email', 'Fax', 'Internet', 'Mail', 'Mobile apps', 'Phone call', 'Social media/Online forums', 'Text message'];
    const genders = ['Female', 'Male'];
    const locations = ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'];
    const ageGroups = ['65 and over', 'All Ages'];

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            contact_method: contactMethod,
            gender: gender,
            location: location,
            age_group: ageGroup,
        };

        // Send POST request to Django backend
        axios.post('/api/analyse', formData)
            .then((response) => {
                console.log('Analysis Data: ', response.data);
                // Handle the response and display the chart here
                setScamData(response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="ScamRiskPage">
            {/* Introduction Section */}
            <header className="scam-risk-header">
                <h1>Scams Risk Assessment</h1>
                <p>Informing you of the most possible scams you will meet</p>
            </header>

            {/* Main Content */}
            <main>
                <session className="analysis-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Contact Methods</label>
                            <select onChange={(e) => setContactMethod(e.target.value)} value={contactMethod}>
                                <option value="" disabled>Select ...</option>
                                {contactMethods.map((method, index) => (
                                    <option key={index} value={method}>{method}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label>Gender</label>
                            <select onChange={(e) => setGender(e.target.value)} value={gender}>
                                <option value="" disabled>Select ...</option>
                                {genders.map((gen, index) => (
                                    <option key={index} value={gen}>{gen}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label>Location</label>
                            <select onChange={(e) => setLocation(e.target.value)} value={location}>
                                <option value="" disabled>Select ...</option>
                                {locations.map((loc, index) => (
                                    <option key={index} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label>Age Group</label>
                            <select onChange={(e) => setAgeGroup(e.target.value)} value={ageGroup}>
                                <option value="" disabled>Select ...</option>
                                {ageGroups.map((age, index) => (
                                    <option key={index} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit">Submit to Analyse</button>
                    </form>
                </session>

                {/* Conditionally render the chart only after form submission */}
                {isSubmitted && (
                    <section className="scam-chart">
                        <h2>Scam Analysis Results</h2>
                        {/* Pass the scam data to the ScamResultsChart component */}
                        {scamData.length > 0 ? <ScamResultsChart data={scamData} /> : <p>No data available.</p>}
                    </section>
                )}
            </main>
        </div>
    );
};

export default RiskAssessmentPage;
