import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar'
import './home.css'
import Catelogue from '../../Catelogue';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from "../../../store/products/getAllProducts";
import Loading from '../../Loading/Loading';
import PaginationComp from '../../PaginationCom.js';
import { ITEM_PER_PAGE } from "../../../util/Constant"

function Home() {
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.getAllProductsReducer.isLoading);
    const allProducts = useSelector(state => state.getAllProductsReducer.allProducts);

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalpage] = useState(0)

    useEffect(() => {

        if (allProducts === null) {
            dispatch(getAllProducts())
        } else {
            setProducts(allProducts)
            setTotalpage(Math.round(Math.ceil(allProducts.length) / ITEM_PER_PAGE))

        }

    }, [products, page, totalPage, allProducts])

    // const getAllProductsFunc = () => {
    //     if (allProducts !== null) {
    //         setTotalpage(Math.ceil(allProducts.length) / ITEM_PER_PAGE)
    //     }
    // }

    const handleClick = (num) => {
        setPage(num)
    }



    return (
        <div >
            {isLoading && <Loading text={"Loading..."} />}
            <div className="position-relative ">
                <div className="nav-container p-2 ">
                    <div>
                        <h5><a className="catelogue-link" href="#home">Home / <span>Catelogue</span></a></h5>
                    </div>
                    <div className="px-2">
                        <input type="text" name="search" id="search" placeholder="Search" />
                    </div>
                </div>
                <Sidebar />
                <div className="collection-preview" style={{ marginLeft: "230px" }}>
                    <div >

                        <div className="preview">
                            <Catelogue allProducts={products} page={page} />
                        </div>
                    </div>
                    <div>
                        <PaginationComp totalPage={totalPage} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
