import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IdentifyScamsPage.css';
import WordCloudComponent from './WordCloud';

const IdentifyScamsPage = () => {
    const navigate = useNavigate();

    // Define the scam types as an array of objects for easy rendering
    const scamTypes = [
        { id: 'text-scams', name: 'Text Scams', img: require('./images/text_scams_icon.png') },
        { id: 'phone-scams', name: 'Phone Scams', img: require('./images/phone_scams_icon.png') },
        { id: 'email-scams', name: 'Email Scams', img: require('./images/email_scams_icon.png') },
        { id: 'social-media-scams', name: 'Social Media Scams', img: require('./images/social_media_scams_icon.png') },
        { id: 'website-scams', name: 'Website Scams', img: require('./images/website_scams_icon.png') },
        { id: 'romance-scams', name: 'Romance Scams', img: require('./images/romance_scams_icon.png') },
        { id: 'investment-scams', name: 'Investment Scams', img: require('./images/investment_scam.png') },
        { id: 'product-and-service-scams', name: 'Product And Service Scams', img: require('./images/product.png') },
        { id: 'job-scams', name: 'Job Scams', img: require('./images/job_scam.jpg') },
        { id: 'impersonation-scams', name: 'Impersonation Scams', img: require('./images/impersonation_scams_icon.png') },
    ];

    // State to keep track of the current index of visible scam items
    const [currentIndex, setCurrentIndex] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 items per page

    // Calculate number of items to show based on window width
    const updateItemsPerPage = () => {
        const width = window.innerWidth;
        if (width >= 1780) {
            setItemsPerPage(5); // Show 5 items on large screens
        } else if (width >= 1280) {
            setItemsPerPage(4); // Show 3 items on medium screens
        } else if (width >= 925) {
            setItemsPerPage(3); // Show 3 items on medium screens
        } else if (width >= 685) {
            setItemsPerPage(2); // Show 3 items on medium screens
        }else {
            setItemsPerPage(1); // Show 1 item on small screens
        }
    };

    // Update items per page on initial render and when resizing window
    useEffect(() => {
        updateItemsPerPage(); // Set initial items per page
        window.addEventListener('resize', updateItemsPerPage);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    // Calculate the maximum index for the carousel
    const maxIndex = Math.ceil(scamTypes.length / itemsPerPage) - 1;

    // Function to go to the next set of items
    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    };

    // Function to go to the previous set of items
    const handlePrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
    };

    // Determine the subset of items to display based on the currentIndex
    const visibleItems = scamTypes.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <div className="IdentifyScamsPage">

            {/* Introduction Section */}
            <header className="indentify-scams-header">
                <h1>How to Identify Scams</h1>
                <p>
                    <strong>Click</strong> on Card to find out more information/example about how different Scams works and how to identify them.
                </p>
            </header>

            {/* Clickable Box Section */}

            <div className="scams-container">
                {/* Display the visible scam items */}
                {visibleItems.map(scam => (
                    <div
                        key={scam.id}
                        className="clickable-box"
                        onClick={() => navigate(`/${scam.id}`)}
                    >
                        <div className="text-content">
                            <h3>{scam.name}</h3>
                            <img src={scam.img} alt={scam.name} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
                <button onClick={handlePrevious} className="nav-button">
                    Previous
                </button>
                <button onClick={handleNext} className="nav-button">
                    Next
                </button>
            </div>

            <div className='identify-word-cloud'>
                <h1>Scam Categories Word Cloud</h1>
            </div>
            <div className='identify-word-cloud-section'>
                <WordCloudComponent />
            </div>

        </div>
    );
};

export default IdentifyScamsPage;
