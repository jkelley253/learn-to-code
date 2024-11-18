// learn-to-code/src/pages/Python/Python.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Basics from './basics/Basics';
import DataStructures from './datastructures/DataStructures';
import ControlFlow from './controlflow/ControlFlow';
import PythonNavbar from '../../components/NavbarPython/PythonNavbar';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import Footer from '../../components/Footer/Footer';
import './Python.css';

function Python() {
    return (
        <div className="python-container">
            <header className="header">
                <PythonNavbar />
                <h1 className="fade-in-header">Python Tutorial</h1>
                <DarkModeToggle />
            </header>
            <main className="main-content">
                <Routes>
                    <Route path="basics" element={<Basics />} />
                    <Route path="data-structures" element={<DataStructures />} />
                    <Route path="control-flow" element={<ControlFlow />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default Python;