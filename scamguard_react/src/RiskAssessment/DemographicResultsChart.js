import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Custom tooltip to format currency for 'Average Loss for Seniors'
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Scam Type: ${payload[0].payload['Scam Type']}`}</p>
                <p>{`Exposure Risk: ${payload[0].payload['exposure_risk']}x`}</p>
                <p>{`Average Loss for Seniors: $${payload[0].payload['Average Loss for Seniors'].toLocaleString()}`}</p>
            </div>
        );
    }
    return null;
};

// Helper function to preprocess data
const preprocessData = (data) => {
    return data.map(item => ({
        ...item,
        'Average Loss for Seniors': parseFloat(item['Average Loss for Seniors'].replace(/[$,]/g, '')) // Convert to numeric value
    }));
};

const DemographicResultsChart = ({ data }) => {
    // console.log("DemographicResultsChart is rendering");
    // Preprocess data
    const processedData = preprocessData(data);
    // console.log('Processed Data for Chart:', processedData);


    return (
        // Set a height for the container
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={processedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Scam Type" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {/* Ensure the data keys are correct */}
                <Bar dataKey="exposure_risk" fill="#8884d8" />
                <Bar dataKey="Average Loss for Seniors" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DemographicResultsChart;
