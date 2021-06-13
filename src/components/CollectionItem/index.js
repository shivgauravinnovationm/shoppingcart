
import React, { useState, useEffect } from 'react';
import "./collection-item.css"
function CollectionItem({ item }) {
    // console.log(item);

    const { category, description, id, image, price, title } = item

    useEffect(() => {
    }, [])

    const categoryClasses = (category) => {
        if (category === "jewelery") {
            return 'item-category'
        } else if (category === "electronics") {
            return "item-category-electronics"
        } else if (category === "women's clothing") {
            return 'item-category-womens-cloth '
        } else {
            return 'item-category-womens-cloth '
        }
    }

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
                <p className="item-description px-1" >
                    {description}
                </p>
            </div>
            <div className="collection-footer d-flex justify-content-md-between mt-2 px-1 ">
                <span className="item-price "> Price: {price}</span>
                <span className={`${categoryClasses(category)} px-2`}>{category}</span>
            </div>

        </div>

    )
}

export default CollectionItem
