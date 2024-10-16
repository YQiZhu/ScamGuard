// ./src/WordCloud.js
import React, { useEffect, useState } from 'react';
import WordCloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './WordCloud.css';

const WordCloudComponent = () => {
    const [scamCategories, setScamCategories] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://scamguard.live/api/scam-categories/")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setScamCategories(data);
                const categories = Object.keys(data);
                if (categories.length > 0) {
                    const firstCategory = categories[0];
                    setSelectedCategory(firstCategory);
                    setWords(convertWords(data[firstCategory].words));
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching scam categories:", error);
                setError("Failed to load scam categories.");
                setLoading(false);
            });
    }, []);

    const convertWords = (wordsObj) => {
        if (!wordsObj) return [];
        return Object.entries(wordsObj).map(([text, value]) => ({ text, value }));
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setWords(convertWords(scamCategories[category]?.words));
    };

    const options = {
        rotations: 2,
        rotationAngles: [0, 90],
        fontSizes: [20, 60],
        enableTooltip: false,
        // Add more customization options as needed
    };

    if (loading) {
        return <div>Loading word cloud...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='wordcloud-component'>
            <div className='wordcloud-form-group'>
                <label htmlFor="category-select">Select Category: </label>
                <select id="category-select" onChange={handleCategoryChange} value={selectedCategory || ''}>
                    {Object.keys(scamCategories).map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {selectedCategory && (
                <div>
                    <h3>{selectedCategory}</h3>
                    <div className="wordcloud-container">
                        <WordCloud words={words} options={options} />
                    </div>
                    <p>{scamCategories[selectedCategory].description}</p>
                </div>
            )}
        </div>
    );
};

export default WordCloudComponent;
