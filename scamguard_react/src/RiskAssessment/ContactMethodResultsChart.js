import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Custom tooltip to format currency for 'Average Loss for Seniors'
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Scam Type: ${payload[0].payload['Scam Type']}`}</p>
                <p>{`Exposure Risk: ${payload[0].payload['Exposure Risk']}x`}</p>
                <p>{`Average Loss for Seniors: ${payload[0].payload['Average Loss for Seniors']}`}</p>
            </div>
        );
    }

    return null;
};

const ContactMethodResultsChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Scam Type" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="Exposure Risk" fill="#8884d8" />
                <Bar dataKey="Average Loss for Seniors" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ContactMethodResultsChart;
