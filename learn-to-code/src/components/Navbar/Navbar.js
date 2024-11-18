// learn-to-code/src/components/Navbar/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();


    return (
        <nav className="navbar">
            <ul>
                {/* Conditionally render Home link only if not on the homepage */}
                {location.pathname !== "/" && (
                    <li><Link to="/">Home</Link></li>
                )}
                <li><Link to="/python">Python</Link></li>
                {/* Add more links here */}
            </ul>
        </nav>
    );
}

export default Navbar;