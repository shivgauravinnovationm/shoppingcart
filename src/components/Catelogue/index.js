import React, { useEffect, useState } from 'react';
import CollectionItem from '../CollectionItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from "../../store/products/getAllProducts";
import Loading from '../Loading/Loading';

function Catelogue() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    const isLoading = useSelector(state => state.getAllProductsReducer.isLoading);
    const allProducts = useSelector(state => state.getAllProductsReducer.allProducts);



    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return (
        <>
            {isLoading && <Loading text={"Loading..."} />}
            {
                allProducts && allProducts?.length > 0 && allProducts?.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </>
    )
}

export default Catelogue
