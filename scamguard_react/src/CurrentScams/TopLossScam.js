import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './MostReportedScam.css';

function TopLossScam() {
    const [data, setData] = useState([]);

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        fetch('https://scamguard.live/api/scams_highest_loss/', {
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
            <h2>Current Top Scams by Loss (in $AUD)</h2>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category_level_3" stroke="#EDF5FF" />
                <YAxis stroke="#EDF5FF" />
                <Tooltip
                    formatter={(value) => [`$${value.toLocaleString()}`, "Amount Lost"]}
                    labelFormatter={(label) => `Scam Type: ${label}`}
                    contentStyle={{ backgroundColor: "#FFF", color: "#000" }}
                />
                <Legend formatter={(value) => "Amount of Lost ($AUD)"} />
                <Bar dataKey="amount_lost" fill="#DBAEFF" />
            </BarChart>
            <p>The <strong>Investment scams</strong> ranked at the <strong>first place</strong> in the top three scams that caused the highest financial losses in June from Australians in the age group 65 and over.</p>

            {isExpanded && (
                <div className="expanded-text">
                    <p>There were <strong>96</strong> reports with total and average financial losses to be <strong>$5,304,465.49 and $55,255.00</strong> respectively.</p>
                    <p>The <strong>Phishing</strong> ranked at the second place in the top three scams that caused the highest financial losses in June from Australians in the age group 65 and over. There were 3025 reports with total and average financial losses to be <strong>$3,502,799.60 and $1,158.00</strong> respectively.</p>
                    <p>The <strong>Remote access scams</strong> ranked at the third place in the top three scams that caused the highest financial losses in June from Australians in the age group 65 and over. There were <strong>200 reports</strong> with total and average financial losses to be <strong>$626,888.79 and $3,134.00</strong> respectively.</p>
                </div>
            )}

            <button className='read-more-button' onClick={toggleReadMore}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
}

export default TopLossScam;