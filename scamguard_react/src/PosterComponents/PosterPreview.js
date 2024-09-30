// src/components/PosterPreview.js
import React, { forwardRef, useEffect, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Text } from 'react-konva';
import useImage from 'use-image';

const PosterPreview = forwardRef(({ template, texts }, ref) => {

    // A4 size
    const WIDTH = 595;
    const HEIGHT = 842;

    const [image] = useImage(template?.image);
    // const [dimensions, setDimensions] = useState({ width: 600, height: 800 });

    // useEffect(() => {
    //     if (image) {
    //         setDimensions({ width: image.width, height: image.height });
    //     }
    // }, [image]);

    return (
        <div>
            <h2>Poster Preview</h2>
            {template ? (
                <Stage width={WIDTH} height={HEIGHT} ref={ref}>
                    <Layer>
                        <KonvaImage image={image} width={WIDTH} height={HEIGHT} />
                        {/* Header Text */}
                        <Text
                            text="Stay Safe from Scams"
                            x={WIDTH / 2}
                            y={50}
                            fontSize={36}
                            fontStyle="bold"
                            fill="#000000"
                            align="center"
                            offsetX={150} // Adjust based on text width
                        />
                        {/* Body Text: List of Scams */}
                        {texts.map((text, index) => (
                            <Text
                                key={index}
                                text={`${text}`}
                                x={100}
                                y={150 + index * 40}
                                fontSize={24}
                                fill="#000000"
                                width={400}
                                align="left"
                            />
                        ))}
                        {/* Footer Text (Optional) */}
                        <Text
                            text="For more information, contact us at [Your Contact Info]"
                            x={WIDTH / 2}
                            y={HEIGHT - 100}
                            fontSize={20}
                            fill="#000000"
                            align="center"
                            offsetX={200} // Adjust based on text width
                        />
                    </Layer>
                </Stage>
            ) : (
                <p>Please select a template to see the preview.</p>
            )}
        </div>
    );
});

export default PosterPreview;
