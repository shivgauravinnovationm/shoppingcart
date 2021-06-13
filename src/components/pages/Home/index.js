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
    const [totalPage, setTotalpage] = useState(0);
    const [itemNo, setItemNo] = useState(0);
    const [searchItem, setSearchItem] = useState([])


    useEffect(() => {

        if (allProducts === null) {
            dispatch(getAllProducts())
        } else {
            setProducts(allProducts)
            setTotalpage(Math.round(Math.ceil(allProducts.length) / ITEM_PER_PAGE))

        }

    }, [products, page, totalPage, allProducts])

    console.log("products", products);
    const handleClick = (num) => {
        setItemNo(num)
        setPage(num)
    }

    const handleSearch = (e) => {
        const { name, value } = e.target;
        setSearch(value)
        searchFilterFunc(value)
    }

    const searchFilterFunc = (value) => {
        console.log("search", search);
        console.log("search", typeof search);
        const travser = products.map(item => item.category)
        const result = products.filter(item => item.category.includes(value) || item.description.includes(value) || item.title.includes(value)
        )
        setSearchItem(result)
        console.log("searchItem", result);
        // console.log("travser", travser);
    }



    return (
        <div >
            {isLoading && <Loading text={"Loading..."} />}
            <div className="position-relative ">
                <div className="nav-container p-2 mb-2 ">
                    <div>
                        <h5><a className="catelogue-link" href="#home">Home / <span>Catelogue</span></a></h5>
                    </div>
                    <div className="px-2">
                        <input type="text" name="search" id="search" placeholder="Search" value={search} onChange={handleSearch} />
                    </div>
                </div>
                <Sidebar />
                <div className="collection-preview" style={{ marginLeft: "230px" }}>
                    <div className="mt-md-5" >

                        <div className="preview">

                            <Catelogue allProducts={searchItem.length > 0 ? searchItem : products} page={page} />
                        </div>
                    </div>
                    <div>
                        <PaginationComp totalPage={totalPage} itemNo={itemNo} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
