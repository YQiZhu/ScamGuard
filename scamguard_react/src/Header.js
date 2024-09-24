import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-icon-link"
      >
        <img src="/favicon.ico" alt="Logo" className="nav-icon" />
      </NavLink>
      <NavLink
        to="/"
        className="nav-icon-link"
      >
        <p className="nav-text">ScamGuard</p>
      </NavLink>
      {/* <p className="nav-text">ScamGuard</p> */}
      <ul>
        {/* <li>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/currentScam"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Current Scams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/identifyScam"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            How to Identify Scams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reportScam"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Report Scams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/whatToDo"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            What To Do If Scammed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/checkScam"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Scam Detector
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/riskAssessment"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Scam Risk Assessment
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Take Quiz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
