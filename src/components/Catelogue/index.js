import React, { useEffect, useState } from 'react';
import CollectionItem from '../CollectionItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from "../../store/products/getAllProducts";

function Catelogue() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    const allProducts = useSelector(state => state.getAllProductsReducer.allProducts);



    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return (
        <>
            {
                allProducts && allProducts?.length > 0 && allProducts?.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </>
    )
}

export default Catelogue
