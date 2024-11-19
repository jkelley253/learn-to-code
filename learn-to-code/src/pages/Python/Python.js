// learn-to-code/src/pages/Python/Python.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Setup from './Setup/Setup';
import PythonNavbar from '../../components/NavbarPython/PythonNavbar';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import Footer from '../../components/Footer/Footer';
import './Python.css';

function Python() {
    return (
        <div className="python-container">
            <header className="header">
                <h1 className="fade-in-header">Python Tutorial</h1>
                <DarkModeToggle />
                <PythonNavbar />
            </header>
            <main className="main-content">
                <Routes>
                    <Route path="setup" element={<Setup />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default Python;