import React from 'react'
import "./collection-item.css"
function CollectionItem() {
    return (

        <div className="collection-item">
            <div className="image"
                style={{
                    // backgroundImage: `url(${})`,
                    backgroundImage: `url(https://images.unsplash.com/photo-1623189839245-ebc6177ddab2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)`,
                }}
            >

            </div>
            <h4 className="item-title">Chromozone</h4>
            <div>
                <p className="item-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="collection-footer mt-2">
                <span className="item-price "> Price: $120</span>
                <span className="item-category px-2">Electornics</span>
            </div>

        </div>

    )
}

export default CollectionItem
