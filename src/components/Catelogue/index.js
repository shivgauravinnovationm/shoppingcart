import React, { useEffect, useState } from 'react';
import CollectionItem from '../CollectionItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from "../../store/products/getAllProducts";
import Loading from '../Loading/Loading';
import { ITEM_PER_PAGE } from "../../util/Constant"

function Catelogue({ allProducts, page }) {

    console.log("allproducts in catelogue", allProducts);
    console.log("allproducts in page", page);
    const startIndex = (page - 1) * ITEM_PER_PAGE;
    const selectedProducts = allProducts?.slice(startIndex, startIndex + ITEM_PER_PAGE);


    return (

        <div className="collection-preview">
            <div >

                <div className="preview">
                    <>

                        {
                            selectedProducts && selectedProducts?.length > 0 && selectedProducts?.map(item => <CollectionItem key={item.id} item={item} />)
                        }
                    </>
                </div>

            </div>
        </div>

    )
}

export default Catelogue
