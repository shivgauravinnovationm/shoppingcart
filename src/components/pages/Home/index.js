import React from 'react'
import Sidebar from '../../Sidebar'
import './home.css'

function Home() {
    return (
        <div className="position-relative">
            <div className="d-flex justify-content-between p-2">
                <div>
                    <h5><a className="catelogue-link" href="#home">Home / <span>Catelogue</span></a></h5>
                </div>
                <div className="px-2">
                    <input type="text" name="search" id="search" placeholder="Search" />
                </div>
            </div>
            <Sidebar />
            <div className="position-relative p-2" style={{ marginLeft: "230px" }}>
                <h1>home component</h1>

            </div>
        </div>
    )
}

export default Home
