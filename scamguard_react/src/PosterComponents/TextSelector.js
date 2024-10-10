// src/components/TextSelector.js
import React, { useState, useEffect } from 'react';
import { scamOptions } from '../TextForPoster/TextForPoster';
import { textPositions } from '../TextForPoster/TextPositions';

const TextSelector = ({ selectedTemplate, selectedTexts, setSelectedTexts, setSelectedScamType }) => {
    const [localSelectedScamType, setLocalSelectedScamType] = useState('');

    // Handle scam type selection (radio buttons)
    const handleScamTypeChange = (e) => {
        const scamType = e.target.value;
        setLocalSelectedScamType(scamType);
        setSelectedScamType(scamType);
        // Reset selectedTexts when scam type changes
        // setSelectedTexts([]);

        // Automatically select all texts for the chosen scam type
        const templateId = selectedTemplate?.id;
        const positionsForTemplate = textPositions[templateId]?.[scamType];

        if (positionsForTemplate) {
            const newSelectedTexts = {};
            Object.keys(positionsForTemplate).forEach(section => {
                // Get all texts in the section related to the selected scam
                const allTextsInSection = scamOptions.find(scam => scam.id === scamType)?.sections[section] || [];
                newSelectedTexts[section] = allTextsInSection;
            });
            setSelectedTexts(newSelectedTexts);
        }
    };

    // Handle related text selection (checkboxes)
    const handleTextChange = (section, e) => {
        const { value, checked } = e.target;
        const currentSectionTexts = selectedTexts[section] || [];
        if (checked) {
            setSelectedTexts({
                ...selectedTexts,
                [section]: [...currentSectionTexts, value],
            });
        } else {
            setSelectedTexts({
                ...selectedTexts,
                [section]: currentSectionTexts.filter(text => text !== value),
            });
        }
    };

    // Find the selected scam option to get related texts
    const selectedScam = scamOptions.find(scam => scam.id === localSelectedScamType);
    const allSections = selectedScam?.sections || {};

    // Determine required sections based on selected template and scam type
    let requiredSections = [];
    if (selectedTemplate && localSelectedScamType) {
        const templateId = selectedTemplate.id;
        const positionsForTemplate = textPositions[templateId]?.[localSelectedScamType];
        if (positionsForTemplate) {
            requiredSections = Object.keys(positionsForTemplate).filter(key => key !== 'header');
            // Exclude 'header' as it is handled separately
        }
    }

    // Function to format section names (e.g., howItWorks => How It Works)
    const formatSectionName = (section) => {
        // Convert camelCase or snake_case to readable text
        const result = section.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ');
        return result.charAt(0).toUpperCase() + result.slice(1);
    };

    // // Effect to reset selectedTexts if requiredSections change (e.g., when template changes)
    // useEffect(() => {
    //     if (selectedTemplate && localSelectedScamType) {
    //         const newSelectedTexts = {};
    //         requiredSections.forEach(section => {
    //             if (selectedTexts[section]) {
    //                 newSelectedTexts[section] = selectedTexts[section];
    //             }
    //         });
    //         setSelectedTexts(newSelectedTexts);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [selectedTemplate, localSelectedScamType]);

    return (
        <div>
            <h2>Select Relevant Scams</h2>
            <form>
                {/* Scam Type Selection */}
                <div>
                    <p>Please select a scam type:</p>
                    {scamOptions.map(scam => (
                        <div key={scam.id}>
                            <label>
                                <input
                                    type="radio"
                                    name="scamType"
                                    value={scam.id}
                                    checked={localSelectedScamType === scam.id}
                                    onChange={handleScamTypeChange}
                                />
                                {scam.label}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Related Texts Selection per required section */}
                {localSelectedScamType && selectedTemplate && (
                    <div style={{ marginTop: '20px' }}>
                        <p>Select details related to {selectedScam.label}:</p>
                        {requiredSections.map(section => (
                            <div key={section} style={{ marginTop: '10px' }}>
                                <strong>{formatSectionName(section)}</strong>
                                {allSections[section].map((text, index) => (
                                    <div key={index}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={text}
                                                checked={selectedTexts[section]?.includes(text) || false}
                                                onChange={(e) => handleTextChange(section, e)}
                                            />
                                            {text}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
};

export default TextSelector;
