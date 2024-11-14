// learn-to-code/src/pages/Home/Home.js

// imports
import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import homePageCode from '../../assets/images/homePageCode.jpg';

// Home component
function Home() {
    return (
        <div className="Home-container"> 
            <header className="header">
                <h1 className="fade-in-header"> Welcome to Learn to Code!</h1>
                <DarkModeToggle />
            </header>
            <Navbar />
            <main className="main-content">
                <img
                    className="centered-image"
                    src={homePageCode.jpg}
                    alt="python tutorial banner"
                />
            </main>
            <Footer />
        </div>
    );
}

export default Home;