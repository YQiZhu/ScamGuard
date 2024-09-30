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
        <div className="PosterPage">
            <header className="poster-header">
                <h1>Scam Awareness Poster Creator</h1>
            </header>

            <main className="poster-main">
                <section className="poster-template-selector">
                    <TemplateSelector
                        selectedTemplate={selectedTemplate}
                        setSelectedTemplate={setSelectedTemplate}
                    />
                </section>
                <div className="poster-setup">
                    <section className="poster-text-selector">
                        <TextSelector
                            selectedTexts={selectedTexts}
                            setSelectedTexts={setSelectedTexts}
                        />
                    </section>
                    <section className="poster-preview">
                        <PosterPreview
                            template={selectedTemplate}
                            texts={selectedTexts}
                            ref={stageRef}
                        />
                    </section>
                </div>
                <section className="poster-download">
                    <DownloadButton stageRef={stageRef} />
                </section>
            </main>
        </div>
    );
};

export default PosterGeneratorPage;
