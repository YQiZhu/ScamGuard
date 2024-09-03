import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <img src="/favicon.ico" alt="Logo" className="nav-icon" />
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/currentScam" activeClassName="active-link">Current Scams</NavLink>
        </li>
        <li>
          <NavLink to="/identifyScam" activeClassName="active-link">How to Identify Scams</NavLink>
        </li>
        <li>
          <NavLink to="/reportScam" activeClassName="active-link">Report Scams</NavLink>
        </li>
        <li>
          <NavLink to="/whatToDo" activeClassName="active-link">What To Do If Scammed</NavLink>
        </li>
        <li>
          <NavLink to="/checkScam" activeClassName="active-link">Check If Is A Scam</NavLink>
        </li>
        <li>
          <NavLink to="/scamRisk" activeClassName="active-link">Scam Risk Assessment</NavLink>
        </li>
        <li>
          <NavLink to="/quiz" activeClassName="active-link">Take Quiz</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
