import React from 'react';
import "./header.css"

function Header() {
    return (
        <div class="header d-flex">
            <div className="blueBox"></div>
            <div class="header-left">
                <a href="#Men">Men</a>
                <a href="#Women">Women</a>
                <a href="#Kids">Kids</a>
            </div>
            <div className="header-right">

            </div>
        </div>
    )
}

export default Header
