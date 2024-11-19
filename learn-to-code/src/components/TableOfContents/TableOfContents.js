// learn-to-code/src/components/TableOfContents/TableOfContents.js

import React from 'react';
import './TableOfContents.css';

function TableOfContents({ sections }) {
    return (
        <nav className="table-of-contents">
            <h3>Table of Contents</h3>
            <ul>
                {sections.map((section) => (
                    <li key={section.id} className={section.subsection ? 'subsection' : ''}>
                        <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default TableOfContents;
