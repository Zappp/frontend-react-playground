import React from 'react';
import { Link } from 'react-router-dom';

import './../../App.css';

function Nav() {
    return (
        <nav>
            <h1>Example React App</h1>

            <ul className="nav-links">

                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/Blog">
                    <li>Blog</li>
                </Link>

                <Link to="/Community">
                    <li>Community</li>
                </Link>

                <Link to="/Tutorial">
                    <li>Tutorial</li>
                </Link>

                <Link to="/Docs">
                    <li>Docs</li>
                </Link>
                
            </ul>
            
        </nav>
    );
}
export default Nav;