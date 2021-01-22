import React from 'react';
import { Link } from 'react-router-dom';

import './../../App.css';

function Nav() {
    return (
        <nav>
            <h1>Example React App</h1>

            <ul className="nav-links">

                <Link to="/components/Home">
                    <li>Home</li>
                </Link>

                <Link to="/components/Blog">
                    <li>Blog</li>
                </Link>

                <Link to="/components/Community">
                    <li>Community</li>
                </Link>

                <Link to="/components/Tutorial">
                    <li>Tutorial</li>
                </Link>

                <Link to="/components/Docs">
                    <li>Docs</li>
                </Link>
                
            </ul>
            
        </nav>
    );
}
export default Nav;