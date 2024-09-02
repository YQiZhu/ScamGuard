// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ marginTop: 'auto', padding: '1rem', backgroundColor: '#0579DE', textAlign: 'center' , color: '#f0f0f0'}}>
      <p>&copy; 2024 Scam Safety for Seniors. All rights reserved.</p>
      <Link to="/references">References</Link>
    </footer>
  );
}

export default Footer;
