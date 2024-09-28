import React, { useState, useRef } from 'react';
import TemplateSelector from './PosterComponents/TemplateSelector';
import TextSelector from './PosterComponents/TextSelector';
import PosterPreview from './PosterComponents/PosterPreview';
import DownloadButton from './PosterComponents/DownloadButton';
import './PosterGeneratorPage.css';

const PosterGeneratorPage = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [selectedTexts, setSelectedTexts] = useState([]);
    const stageRef = useRef(null);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Scam Awareness Poster Creator</h1>
            <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
            <TextSelector selectedTexts={selectedTexts} setSelectedTexts={setSelectedTexts} />
            <PosterPreview template={selectedTemplate} texts={selectedTexts} ref={stageRef} />
            <DownloadButton stageRef={stageRef} />
        </div>
    );
};

export default PosterGeneratorPage;
