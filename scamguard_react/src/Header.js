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
                    {/* <li>
                        <Link to="/map">Bicycle Accidents Statistic</Link>
                    </li>
                    <li>
                        <Link to="/route">Bicycle Lane</Link>
                    </li> */}
                </ul>
            </nav>
    );
};

export default Header;