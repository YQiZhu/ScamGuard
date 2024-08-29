import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/currentScam">Current Scams</Link>
                    </li>
                    <li>
                        <Link to="/identifyScam">How to Identify Scams</Link>
                    </li>
                    <li>
                        <Link to="/reportScam">Report Scams</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Header;