import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './RiskAssessmentChart.css';

// Custom tooltip for 'Exposure Risk'
const CustomTooltipExposure = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Scam Type: ${payload[0].payload['Scam Type']}`}</p>
                <p>{`Exposure Risk: ${payload[0].payload['exposure_risk']}x`}</p>
            </div>
        );
    }
    return null;
};

// Custom tooltip for 'Average Loss for Seniors'
const CustomTooltipLoss = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Scam Type: ${payload[0].payload['Scam Type']}`}</p>
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
        <div className="risk-assessment-chart-container">
            <div className="risk-assessment-chart-wrapper">
                {/* Exposure Risk Chart */}
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={processedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Scam Type"
                            label={{
                                value: 'Scam Type',
                                position: 'insideBottom',
                                offset: -30,
                                style: {
                                    textAnchor: 'middle',
                                    fontSize: 18, // Increase font size of the label
                                    fontWeight: 'bold',
                                }
                            }}
                            tick={{ angle: -25, textAnchor: 'end' }} // Rotate labels by -45 degrees and align them to the end
                            interval={0} // Show all labels, no skipping
                        />
                        <YAxis label={{
                            value: 'Exposure Risk',
                            angle: -90,
                            position: 'insideLeft',
                            offset: 1,
                            style: {
                                textAnchor: 'middle',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }
                        }} />
                        <Tooltip content={<CustomTooltipExposure />} />
                        <Legend formatter={(value) => "Exposure Risk"} wrapperStyle={{ display: 'flex', justifyContent: 'center', paddingTop: '35px' }} />
                        {/* Ensure the data keys are correct */}
                        <Bar dataKey="exposure_risk" fill="#8884d8" radius={[30, 30, 30, 30]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="risk-assessment-chart-wrapper">
                {/* Average Loss for Seniors Chart */}
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={processedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Scam Type"
                            label={{
                                value: 'Scam Type',
                                position: 'insideBottom',
                                offset: -30,
                                style: {
                                    textAnchor: 'middle',
                                    fontSize: 18, // Increase font size of the label
                                    fontWeight: 'bold',
                                }
                            }}
                            tick={{ angle: -25, textAnchor: 'end' }} // Rotate labels by -45 degrees and align them to the end
                            interval={0} // Show all labels, no skipping
                        />
                        <YAxis label={{
                            value: 'Average Loss ($AUD)',
                            angle: -90,
                            position: 'insideLeft',
                            offset: 1,
                            style: {
                                textAnchor: 'middle',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }
                        }} />
                        <Tooltip content={<CustomTooltipLoss />} />
                        <Legend wrapperStyle={{ display: 'flex', justifyContent: 'center', paddingTop: '35px' }} />
                        <Bar dataKey="Average Loss for Seniors" fill="#82ca9d" radius={[30, 30, 30, 30]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DemographicResultsChart;
