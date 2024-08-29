import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './MostReportedScam.css';

function TopLossScam() {
    const [data, setData] = useState([]);

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
                <XAxis dataKey="category_level_3" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount_lost" fill="#8884d8" />
            </BarChart>
            <p>
                The Investment scams ranked at the first place in the top three scams that caused the highest financial losses in June from Australians in the age group $65 and over. There were 96 reports with total and average financial losses to be $5,304,465.49 and $55,255.00 respectively.
                The Phishing ranked at the second place in the top three scams that caused the highest financial losses in June from Australians in the age group $65 and over. There were 3025 reports with total and average financial losses to be $3,502,799.60 and $1,158.00 respectively.
                The Remote access scams ranked at the third place in the top three scams that caused the highest financial losses in June from Australians in the age group $65 and over. There were 200 reports with total and average financial losses to be $626,888.79 and $3,134.00 respectively.

            </p>
        </div>
    );
}

export default TopLossScam;