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
    const headerText = selectedScam ? `${selectedScam.label}` : 'Stay Safe from Scams';

    // Retrieve text positions based on template ID and scam type
    const templateId = template?.id;
    const positionsForTemplate = textPositions[templateId]?.[scamType];
    let headerPosition = { x: WIDTH / 2, y: 50 }; // default position
    let sectionPositions = {}; // positions per section

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
                            fill="#000000"
                            align="center"
                            // To center the text, set width and align
                            width={300}
                        />
                        {/* Sections Text */}
                        {Object.keys(sectionPositions).map(section => (
                            texts[section]?.map((text, index) => (
                                <Text
                                    key={`${section}-${index}`}
                                    text={text}
                                    x={sectionPositions[section].x}
                                    y={sectionPositions[section].y + index * 50} // Adjust spacing as needed
                                    fontSize={18}
                                    fill="#000000"
                                    width={sectionPositions[section].width}
                                    align="left"
                                />
                            ))
                        ))}
                        {/* Footer Text (Optional) */}
                        {/* <Text
                            text="For more information, contact us at [Your Contact Info]"
                            x={WIDTH / 2}
                            y={HEIGHT - 100}
                            fontSize={20}
                            fill="#000000"
                            align="center"
                            width={200}
                        /> */}
                    </Layer>
                </Stage>
            ) : (
                <p>Please select a template to see the preview.</p>
            )}
        </div>
    );
});

export default PosterPreview;
