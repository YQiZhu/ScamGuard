// src/components/DownloadButton.js
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadButton = ({ template, texts }) => {
  const handleDownload = () => {
    const input = document.getElementById('poster-preview');
    if (!input) {
      alert('Please create a poster before downloading.');
      return;
    }

    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('scam-awareness-poster.pdf');
    });
  };

  return (
    <button onClick={handleDownload} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
      Download as PDF
    </button>
  );
};

export default DownloadButton;
