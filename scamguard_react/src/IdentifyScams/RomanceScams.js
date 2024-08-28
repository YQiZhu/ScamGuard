import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import './MostReportedScam.css'; 

function RomanceScams() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://scamguard.live/api/most_frequent_scams/', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => setData(data))
    //         .catch(error => console.error('Error fetching map data:', error.message));
    // }, []);

    return (
        <div className="chart-container">
            <div>
                <h2>Romance Scams</h2>
                
            </div>
        </div>
    );
}

export default RomanceScams;