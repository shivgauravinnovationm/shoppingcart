
import React, { useState, useEffect } from 'react';
import "./collection-item.css"
function CollectionItem({ item }) {

    const { category, description, id, image, price, title } = item

    useEffect(() => {
    }, [])

    return (

        <div className="collection-item" key={id}>
            <div className="image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >

            </div>
            <h4 className="item-title">{category}</h4>
            <div>
                <p className="item-description" style={{}}>
                    {description}
                </p>
            </div>
            <div className="collection-footer mt-2">
                <span className="item-price "> Price: {price}</span>
                <span className="item-category px-2">Electornics</span>
            </div>

        </div>

    )
}

export default CollectionItem
