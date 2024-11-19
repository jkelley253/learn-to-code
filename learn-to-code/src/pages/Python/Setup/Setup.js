// learn-to-code/src/pages/Setup/Setup.js

import React from 'react';
import DarkModeToggle from '../../../components/DarkModeToggle/DarkModeToggle';
import TableOfContents from '../../../components/TableOfContents/TableOfContents';
import './Setup.css';

function Setup() {
    const sections = [
        { id: 'intro', title: '1. Introduction' },
        { id: 'intro-1', title: '1.1 Overview', subsection: true },
        { id: 'intro-2', title: '1.3 Comparisons of Different IDEs', subsection: true },
        { id: 'intro-3', title: '1.3 installation of Python and IDEs', subsection: true },
        { id: 'intro-4', title: '1.4 Python Overview', subsection: true },
    ]

    return (
        <div className="setup-container">
            <header className="header">
                <DarkModeToggle />
            </header>
            <div className="content-container">
                <TableOfContents sections={sections} />
                <main className="main-content">
                    <section id="intro">
                        <h1>Introduction</h1>
                        <p>
                            Before we start writing Python code, we need to set up our development environment. This includes installing Python, a code editor, and some extensions.
                        </p>
                        <section id='intro-1'>
                            <h2>Overview</h2>
                            <p>
                                Python is a versatile, high-level programming language known for its readability and large community support. 
                                Python has become one of the most popular programming languages due to its simplicity and applicability across fields like data science, 
                                web development, automation, machine learning, and more. 
                            </p>
                            <h3>Key Features:</h3>
                            <ul>
                                <li>Simplicity: Python's clean syntax and readability make it easy to learn and use.</li>
                                <li>Interpreted Language: Python code is executed line by line, making it easier to debug.</li>
                                <li>Object-Oriented Programming: Python supports OOP principles like classes, inheritance, encapsulation, and polymorphism.</li>
                                <li>Cross-Platform: Python code can run on Windows, macOS, and Linux.</li>
                                <li>
                                    Extensive Libraries: Python has thousands of libraries for everything from web frameworks to data analysis 
                                    (e.g., Django, Flask, NumPy, Pandas).
                                </li>
                            </ul>
                        </section>
                        <section id='intro-2'>
                            <h2> Comparisons of Different IDEs</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>IDE</th>
                                        <th>Strengths</th>
                                        <th>Weaknesses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>VSCode</td>
                                        <td>
                                            <ul>
                                                <li>Lightweight</li>
                                                <li>Customizable</li>
                                                <li>Great for projects requiring multiple languages</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Requires setup for Python extensions</li>
                                                <li>Can be overwhelming for beginners</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>PyCharm</td>
                                        <td>
                                            <ul>
                                                <li>Great for large Python projects</li>
                                                <li>Powerful debugging and testing tools</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Heavy on resources</li>
                                                <li>Free version lacks advanced features</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jupyter</td>
                                        <td>
                                            <ul>
                                                <li>Ideal for data science</li>
                                                <li>Inline code execution</li>
                                                <li>Visualizations</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Not suited for general-purpose programming</li>
                                                <li>Requires setup for non-data projects</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Atom</td>
                                        <td>
                                            <ul>
                                                <li>Highly customizable</li>
                                                <li>Cross-platform</li>
                                                <li>Good for collaborative editing</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Slower than other editors</li>
                                                <li>Lacks native Python support without packages</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>IDLE</td>
                                        <td>
                                            <ul>
                                                <li>Lightweight</li>
                                                <li>Built-in with Python</li>
                                                <li>Great for beginners</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Limited features</li>
                                                <li>Basic editor without modern IDE tools</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p> Choosing an IDE:</p>
                                <p>Your choice will depend on your goals and preferences. Beginners often start with IDLE or VSCode for general projects, 
                                    while Jupyter is popular for data science tasks, and Pycharm suites larger projects.</p>
                                <p>I am currently using VSCode due to its versatility and support. </p>
                        </section>
                        <section id='intro-3'>
                            <h2> Installation of Python and IDEs</h2>
                                <h3>Python Installation:</h3>
                                    <p> Python can be installed by visiting the link below, which will take you to the official Python website.
                                        Just select the correct version for your operating system and follow the download steps provided.
                                    </p> 
                                    <a href= "https://www.python.org/downloads"target="_blank" rel="noopener noreferrer">Python download</a>
                                <h3>IDE Installation:</h3>
                                    <p> Once you have installed Python, select the IDE you wish to use and navigate to their website for the download.
                                        From here on, the tutorial will be using VSCode, but feel free to use any IDE you are comfortable with.
                                        You can download VSCode from the link below.
                                    </p> 
                                    <a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">VSCode download</a>
                        </section>
                        <section id='intro-4'>
                            <h2>Python Overview</h2>
                                <p>Below is a high-level overview of what Python has to offer. Don't worry if these topics will be covered more in-depth as we progress 
                                    through this course. 
                                </p>
                                <ul>
                                    <li>Interpreted Language: Unlike compiled languages, Python reads and executes code line by line.</li>
                                    <li>Dynamic Typing: Python handles variable types automatically without explicit declarations.</li>
                                    <li>Indentation-Based Syntax: Python relies on indentation to define code blocks</li>
                                    <li>Extensive Standard Library: Includes modules for file I/O, system operations, networking, and much more.</li>
                                    <li>Cross-Platform Compatibility: Python scripts are generally portable across different operating systems.</li>
                                </ul>
                        </section>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Setup;
