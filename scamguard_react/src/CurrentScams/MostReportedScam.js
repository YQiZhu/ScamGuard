import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './MostReportedScam.css';

function MostReportedScam() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://scamguard.live/api/most_frequent_scams/', {
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

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="chart-container">
            <h2>Current Most Reported Scams</h2>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category_level_3" />
                <YAxis />
                <Tooltip
                    formatter={(value) => [`${value.toLocaleString()}`, "Number of Reports"]}
                    labelFormatter={(label) => `Scam Type: ${label}`}
                />
                <Legend formatter={(value) => "Number of Reports"} />
                <Bar dataKey="number_of_reports" fill="#8884d8" radius={[30, 30, 30, 30]}/>
            </BarChart>
            <p>The <strong>Phishing</strong> ranked at the <strong>first place</strong> in the top three most frequent scams received by Australians from the age group 65 and over.</p>

            {isExpanded && (
                <div className="expanded-text">
                    <p>There were <strong>3025 Phishing scams</strong> reported for June, which increased by half compared to the similar month a year ago. It is expected that this Phishing will continue to increase.</p>
                    <p>The <strong>False billing</strong> ranked at the second place in the top three most frequent scams received by Australians from the age group 65 and over. There were <strong>735 False billing scams</strong> reported for June, which decreased by a quarter compared to the similar month a year ago. It is expected that this False billing will continue to decrease.</p>
                    <p>The <strong>Identity theft</strong> ranked at the third place in the top three most frequent scams received by Australians from the age group 65 and over. There were <strong>449 Identity theft scams</strong> reported for June, which increased by half compared to the similar month a year ago. It is expected that this Identity theft will continue to increase.</p>
                </div>
            )}

            <button className="bule-background-button" onClick={toggleReadMore}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>

        </div>
    );
}

export default MostReportedScam;