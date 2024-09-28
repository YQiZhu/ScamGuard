// src/components/PosterPreview.js
import React from 'react';

const PosterPreview = ({ template, texts }) => {
  if (!template) {
    return <p>Please select a template to see the preview.</p>;
  }

  return (
    <div>
      <h2>Poster Preview</h2>
      <div
        id="poster-preview"
        style={{
          position: 'relative',
          width: '300px',
          height: '400px',
          border: '1px solid #ccc',
          margin: '0 auto',
          backgroundImage: `url(${template.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#fff' }}>
          <h3>Stay Safe from Scams</h3>
          <ul>
            {texts.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PosterPreview;
