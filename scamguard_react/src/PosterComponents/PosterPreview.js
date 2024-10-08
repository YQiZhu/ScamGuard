// src/components/PosterPreview.js
import React, { forwardRef, useEffect, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Text } from 'react-konva';
import useImage from 'use-image';
import { scamOptions } from '../TextForPoster/TextForPoster';
import { textPositions } from '../TextForPoster/TextPositions';

const PosterPreview = forwardRef(({ template, texts, scamType }, ref) => {
    // A4 size
    const WIDTH = 595;
    const HEIGHT = 842;

    const [image] = useImage(template?.image);

    // Find the selected scam's label based on scamType ID
    const selectedScam = scamOptions.find(scam => scam.id === scamType);
    const headerText = selectedScam ? `${selectedScam.label}` : '';

    // Retrieve text positions based on template ID and scam type
    const templateId = template?.id;
    const positionsForTemplate = textPositions[templateId]?.[scamType];
    let headerPosition = { x: WIDTH / 2, y: 50 }; // default position
    let sectionPositions = {}; // positions per section
    let sectionFontFamily = textPositions[templateId]?.fontFamily || "'Roboto'";
    let fillColour = textPositions[templateId]?.fillColour || "#000000";
    let headerColour = textPositions[templateId]?.headerColour || "#000000";
    let textHeight = textPositions[templateId]?.fontSize ||18;
    // let charPerLine = textPositions[templateId]?.charPerLine || 25;
    // let charPerLineProtect = textPositions[templateId]?.charPerLineProtect || 40;
    console.log(`Font Family: "${sectionFontFamily}"`)

    if (positionsForTemplate) {
        headerPosition = positionsForTemplate.header || headerPosition;
        // Extract other sections
        Object.keys(positionsForTemplate).forEach(key => {
            if (key !== 'header') {
                sectionPositions[key] = positionsForTemplate[key];
            }
        });
    } else {
        console.warn(`Text positions not defined for template ID "${templateId}" and scam type "${scamType}". Using default positions.`);
    }

    return (
        <div>
            <h2>Poster Preview</h2>
            {template ? (
                <Stage width={WIDTH} height={HEIGHT} ref={ref}>
                    <Layer>
                        <KonvaImage image={image} width={WIDTH} height={HEIGHT} />
                        {/* Header Text */}
                        <Text
                            text={headerText}
                            x={headerPosition.x}
                            y={headerPosition.y}
                            fontSize={38}
                            fontStyle="bold"
                            fontFamily={sectionFontFamily}
                            fill={headerColour}
                            align="center"
                            // To center the text, set width and align
                            width={350}
                        />
                        {/* Sections Text */}
                        {Object.keys(sectionPositions).map(section => {
                            let currentY = sectionPositions[section].y; // Start y position for the section

                            return texts[section]?.map((text, index) => {
                                // Determine if the section is howToIdentify or commonTactics
                                const isBulletPointSection = section === 'howToIdentify' || section === 'commonTactics' || section === 'protectYourself';
                                const bulletText = isBulletPointSection ? `• ${text}` : text; // Add bullet point

                                // Calculate text height
                                // const textHeight = 18; // Set a fixed font size
                                // const isprotectYourselfSection = section === 'protectYourself';
                                const textLines = Math.ceil(bulletText.length / sectionPositions[section].charPerLine); // Assuming x characters per line 
                                const renderedHeight = textHeight * textLines + 10; // Add some padding

                                const textNode = (
                                    <Text
                                        key={`${section}-${index}`}
                                        text={bulletText}
                                        x={sectionPositions[section].x}
                                        y={currentY} // Use the currentY for positioning
                                        fontSize={textHeight}
                                        fill={fillColour}
                                        fontFamily={sectionFontFamily}
                                        width={sectionPositions[section].width}
                                        align="left"
                                    />
                                );

                                // Update currentY for the next text
                                currentY += renderedHeight; // Move the y position down

                                return textNode; // Return the rendered text node
                            });
                        })}
                    </Layer>
                </Stage>
            ) : (
                <p>Please select a template to see the preview.</p>
            )}
        </div>
    );
});

export default PosterPreview;
