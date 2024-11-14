// learn-to-code/src/components/Navbar/Navbar.js

import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#basics">Basics</a></li>
                <li><a href="#data-structures">Data Structures</a></li>
                <li><a href="#control-flow">Control Flow</a></li>
                {/* Add more links here */}
            </ul>
        </nav>
    );
}

export default Navbar;