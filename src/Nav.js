import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Nav() {
    return (
        <nav>
            <h1>Example React App</h1>
            <ul className="nav-links">

                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/page1">
                    <li>page1</li>
                </Link>

                <Link to="/page2">
                    <li>page2</li>
                </Link>

            </ul>
        </nav>
    );
}
export default Nav;
