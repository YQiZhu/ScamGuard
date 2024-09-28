// src/components/TemplateSelector.js
import React from 'react';

const templates = [
    { id: 1, name: 'Template 1', image: '/templates/template1.png' },
    { id: 2, name: 'Template 2', image: '/templates/template2.png' },
    // Add more templates as needed
];

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
    return (
        <div>
            <h2>Select a Poster Template</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {templates.map(template => (
                    <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template)}>
                        <img
                            src={template.image}
                            alt={template.name}
                            style={{
                                border: selectedTemplate?.id === template.id ? '2px solid blue' : '1px solid gray',
                                cursor: 'pointer',
                                width: '150px',
                                height: '200px',
                                objectFit: 'cover',
                            }}
                        />
                        <p>{template.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelector;
