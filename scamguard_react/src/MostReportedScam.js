import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './MostReportedScam.css'; 

function MostReportedScam() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1000000000); // Set timeout to 10 seconds (10000 milliseconds)

        fetch('https://3.81.206.172:8000/api/most_frequent_scams/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                clearTimeout(timeoutId); // Clear the timeout if the request is successful
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.error('Fetch request timed out');
                    setError('Request timed out. Please try again.');
                } else {
                    console.error('Error fetching map data:', error.message);
                    setError('Failed to fetch data.');
                }
            });

        return () => {
            clearTimeout(timeoutId); // Cleanup timeout on component unmount
            controller.abort(); // Abort fetch on component unmount
        };
    }, []);

    return (
        <div className="chart-container">
            <h2>Top 3 Most Frequent Scams</h2>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
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
                    <Bar dataKey="number_of_reports" fill="#8884d8" />
                </BarChart>
            )}
        </div>
    );
}

export default MostReportedScam;
