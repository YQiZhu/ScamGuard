import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '1rem',
      backgroundColor: '#203F9D',
      textAlign: 'center',
      color: '#f0f0f0',
      height: '80px', /* Fixed height for the footer */
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box' /* Ensures padding is included within the height */
    }}>
      <p style={{ margin: 0 }}>&copy; 2024 ScamGuard. All rights reserved.</p>
      <Link to="/references" style={{ color: '#FAFF00', marginLeft: '10px', fontSize:'18px'}}>References</Link>
    </footer>
  );
}

export default Footer;