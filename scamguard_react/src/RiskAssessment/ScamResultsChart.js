import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ScamResultsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category_level_2" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount_lost" fill="#8884d8" />
        <Bar dataKey="number_of_reports" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ScamResultsChart;