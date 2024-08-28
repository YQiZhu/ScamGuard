import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './MostReportedScam.css'; 

function PopularContactMethods() {
    const [data, setData] = useState([]);

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
            <div>
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
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="number_of_reports" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
}

export default PopularContactMethods;