// learn-to-code/src/components/DarkModeToggle/DarkModeToggle.js

import React, { useState } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode', !darkMode);
        setDarkMode(!darkMode);
    };

    return (
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;