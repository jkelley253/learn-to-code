// learn-to-code/src/components/NavbarPython/PythonNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './PythonNavbar.css';

function PythonNavbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/python/basics">Basics</Link></li>
                <li><Link to="/python/control-flow">Control Flow</Link></li>
                <li><Link to="/python/data-structures">Data structures</Link></li>
                {/* Add more links here */}
            </ul>
        </nav>
    );
}

export default PythonNavbar;