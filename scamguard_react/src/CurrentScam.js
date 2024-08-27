import React, { useEffect, useState } from 'react';

function CurrentScam() {
    

    useEffect(() => {
        fetch('http://3.25.253.148:8000/api/google-maps-api-key/')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched API Key:', data.apiKey); // Debugging line
                setApiKey(data.apiKey);
            })
            .catch(error => console.error('Error fetching Google Maps API key:', error));
    }, []);

    

    return (
        <div>
            
        </div>
    );
}

export default CurrentScam;