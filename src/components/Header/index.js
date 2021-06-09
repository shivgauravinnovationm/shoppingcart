import React from 'react';
import "./header.css"

function Header() {
    return (
        <div class="header d-flex">
            <div className="blueBox"></div>
            <div class="header-right">
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Header
