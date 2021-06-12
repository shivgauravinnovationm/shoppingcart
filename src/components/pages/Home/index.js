import React from 'react'
import Sidebar from '../../Sidebar'
import './home.css'
import CollectionItem from '../../CollectionItem'

function Home() {
    return (
        <div className="position-relative ">
            <div className="d-flex justify-content-between p-2">
                <div>
                    <h5><a className="catelogue-link" href="#home">Home / <span>Catelogue</span></a></h5>
                </div>
                <div className="px-2">
                    <input type="text" name="search" id="search" placeholder="Search" />
                </div>
            </div>
            <Sidebar />
            <div className="collection-preview" style={{ marginLeft: "230px" }}>
                <div className="abc">
                    <div className="preview">
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                        <CollectionItem />
                    </div>
                </div>
                <div>
                    <h1>pagination</h1>
                </div>
            </div>



        </div>

    )
}

export default Home
