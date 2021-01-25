import React from 'react';
import { NavLink } from 'react-router-dom';

import './../../App.css';
import './../Nav/index.css';

function Nav() {
  return (
    <nav className="nav">

        <NavLink to="/" activeClassName="logo">
           Home 
        </NavLink>

      <div className="bar">
        <NavLink to="/Blog" activeClassName="link">
           Bar 
        </NavLink>

        <NavLink to="/Community" activeClassName="link">
          Community
        </NavLink>

        <NavLink to="/Tutorial" activeClassName="link">
          Tutorial
        </NavLink>

        <NavLink to="/Docs" activeClassName="link">
          Docs 
        </NavLink>
      </div>

    </nav >
  );
}
export default Nav;