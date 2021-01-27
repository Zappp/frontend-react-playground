import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './../../App.css';
import './../Nav/index.css';

function Nav() {
  return (
    <nav>
      <div className="nav">

        <Link to="/" className="nav-logo">
          <svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" stroke-width="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </Link>

        <Link to="/" className="nav-home">
          React
        </Link>

        <div className="nav-bar">
          <NavLink to="/Blog" activeClassName="active-link">
            Blog
        </NavLink>

          <NavLink to="/Community" activeClassName="active-link">
            Community
        </NavLink>

          <NavLink to="/Tutorial" activeClassName="active-link">
            Tutorial
        </NavLink>

          <NavLink to="/Docs" activeClassName="active-link">
            Docs
        </NavLink>
        </div>
      </div>
    </nav >


  );
}
export default Nav;