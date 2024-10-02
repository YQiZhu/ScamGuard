// src/components/TemplateSelector.js
import React from 'react';

const templates = [
    { id: 1, name: 'Template 1', image: '/templates/template1.png' },
    { id: 2, name: 'Template 2', image: '/templates/template2.png' },
    { id: 3, name: 'Template 3', image: '/templates/TP1_Blank.png' },
    //TP1_Blank.png
    // Add more templates as needed
];

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
    return (
        <div>
            <h2>Select a Poster Template</h2>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                {templates.map(template => (
                    <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template)}
                        style={{
                            border: selectedTemplate?.id === template.id ? '2px solid blue' : '1px solid gray',
                            cursor: 'pointer',
                            padding: '5px',
                        }}>
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
                        <p style={{ textAlign: 'center', margin: '5px', fontWeight: 'bold' }}>{template.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelector;
