import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function CurrentScam() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Fetch data from Django API
        axios.get('http://localhost:8000/api/most_frequent_scams/')  // Replace with your actual Django URL
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data: ', error);
          });
      }, []);
    
      return (
        <div>
          <h2>Top 3 Most Frequent Scams</h2>
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
        </div>
      );
}

export default CurrentScam;