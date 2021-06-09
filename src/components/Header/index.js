import React from 'react';
import "./header.css"

function Header() {
    return (
        <div class="header d-flex">
            <div className="blueBox"></div>
            <div class="header-right">
                <a href="#Men">Men</a>
                <a href="#Women">Women</a>
                <a href="#Kids">Kids</a>
            </div>
        </div>
    )
}

export default Header
