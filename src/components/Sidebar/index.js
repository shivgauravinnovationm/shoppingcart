import React from 'react'
import "./sidebar.css";

function Sidebar() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <a className="active" href="#home">Categories</a>
                <div className="sidebar-container">
                    <input type="checkbox" name="jewellery" id="" />
                    <div> <p className="sidebar-para">Jewellery</p></div>
                    <div className="img_color_orange"></div>
                </div>
                <div className="sidebar-container">
                    <input type="checkbox" name="jewellery" id="" />
                    <div> <p className="sidebar-para">Electornics</p></div>
                    <div className="img_color_lightBlue"></div>
                </div>
                <div className="sidebar-container">
                    <input type="checkbox" name="jewellery" id="" />
                    <div> <p className="sidebar-para">Clothes</p></div>
                    <div className="img_color_voilet"></div>
                </div>
                <div className="sidebar-container">
                    <input type="checkbox" name="jewellery" id="" />
                    <div> <p className="sidebar-para">Sports</p></div>
                    <div className="img_color_green"></div>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
