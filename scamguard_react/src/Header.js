import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isCurrentScamsOpen, setCurrentScamsOpen] = useState(false);
  const [isHowToOpen, setHowToOpen] = useState(false);
  const [isReportOpen, setReportOpen] = useState(false);
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
      <ul className='header-nav-ul'>
        <li onMouseEnter={() => setCurrentScamsOpen(true)} onMouseLeave={() => setCurrentScamsOpen(false)}>
          <span>Learn About Scams</span>
          {isCurrentScamsOpen && (
            <ul className="dropdown">
              <li>
                <NavLink to="/currentScam" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Current Scams
                </NavLink>
              </li>
              <li>
                <NavLink to="/identifyScam" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  How to Identify Scams
                </NavLink>
              </li>
              <li>
                <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Take Quiz
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => setReportOpen(true)} onMouseLeave={() => setReportOpen(false)}>
          <span>Report Scams</span>
          {isReportOpen && (
            <ul className="dropdown">
              <li>
                <NavLink to="/reportScam" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Report Scams
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => setHowToOpen(true)} onMouseLeave={() => setHowToOpen(false)}>
          <span>Stay Alert</span>
          {isHowToOpen && (
            <ul className="dropdown">
              <li>
                <NavLink to="/checkScam" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Scam Detector
                </NavLink>
              </li>
              <li>
                <NavLink to="/riskAssessment" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Scam Risk Assessment
                </NavLink>
              </li>
              <li>
                <NavLink to="/posterGenerator" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Poster Generator
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
