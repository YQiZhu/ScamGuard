import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './MostReportedScam.css';

function PopularContactMethods() {
    const [data, setData] = useState([]);

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        fetch('https://scamguard.live/api/most_scams_contact_methods/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching map data:', error.message));
    }, []);

    return (
        <div className="chart-container">
            <h2>Current Most Popular Contact Methods</h2>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scam_contact_mode" />
                <YAxis />
                <Tooltip
                    formatter={(value) => [`$${value.toLocaleString()}`, "Number of Reports"]}
                    labelFormatter={(label) => `Scam Type: ${label}`}
                />
                <Legend formatter={(value) => "Number of Reports"} />
                <Bar dataKey="number_of_reports" fill="#8884d8" />
            </BarChart>
            <p>The Email ranked at the first place in the top three most frequent methods scammers used to contact Australians from the age group 65 and over.</p>

            {isExpanded && (
                <div className="expanded-text">
                    <p>There were 3198 Email reports for June, which increased by one-third compared to the similar month a year ago. It is expected that this Email method will continue to increase.</p>
                    <p>The Text message ranked at the second place in the top three most frequent methods scammers used to contact Australians from the age group 65 and over. There were 2001 Text message reports for June, which increased by double compared to the similar month a year ago. It is expected that this Text message method will continue to increase.</p>
                    <p>The Phone call ranked at the third place in the top three most frequent methods scammers used to contact Australians from the age group 65 and over. There were 575 Phone call reports for June, which decreased by half compared to the similar month a year ago. It is expected that this Phone call method will continue to decrease.</p>
                </div>
            )}

            <button className="bule-background-button" onClick={toggleReadMore}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
}

export default PopularContactMethods;