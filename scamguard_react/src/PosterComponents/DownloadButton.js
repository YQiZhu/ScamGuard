import React from 'react';
import jsPDF from 'jspdf';

const DownloadButton = ({ stageRef }) => {
  const handleDownload = () => {
    if (!stageRef.current) {
      alert('Please create a poster before downloading.');
      return;
    }

    const dataURL = stageRef.current.toDataURL({ pixelRatio: 2 });
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [stageRef.current.width(), stageRef.current.height()],
    });

    pdf.addImage(dataURL, 'PNG', 0, 0, stageRef.current.width(), stageRef.current.height());
    pdf.save('scam-awareness-poster.pdf');
  };

  return (
    <button
      onClick={handleDownload}
      style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
    >
      Download as PDF
    </button>
  );
};

export default DownloadButton;
