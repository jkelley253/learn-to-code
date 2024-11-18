// learn-to-code/src/pages/Home/Home.js

// imports
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import homePageCode from '../../assets/images/homePageCode.jpg';
import './Home.css';

// Home component
function Home() {
    return (
        <div className="home-container"> 
            <header className="header">
                <h1 className="fade-in-header">Welcome to Learn to Code!</h1>
                <DarkModeToggle />
                <Navbar />
            </header>
            <main className="main-content">
                <img
                    className="centered-image"
                    src={homePageCode}
                    alt="Its time to code!"
                />
            </main>
            <Footer />
        </div>
    );
}

export default Home;