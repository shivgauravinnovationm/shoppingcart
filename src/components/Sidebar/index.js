import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllJewellery } from "../../store/products/getJewellery"
import { getAllElectronics } from "../../store/products/getElectronics"
import "./sidebar.css";
import Loading from '../Loading/Loading';

function Sidebar() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.getAllJewelleryReducer.isLoading);

    const [jewellery, setJewellery] = useState(false)
    const [electronics, setElectronics] = useState(false)
    const [clothes, setClothes] = useState(false);
    const [sports, setSports] = useState(false)

    // console.log("jewellery", jewellery);
    // console.log("electronics", electronics);
    // console.log("clothes", clothes);
    // console.log("sports", sports);

    useEffect(() => {
        if (jewellery) {
            dispatch(getAllJewellery())
        } else if (electronics) {
            dispatch(getAllElectronics())
        } else if (clothes) {
            // 
        } else if (sports) {
            // 
        }

    }, [jewellery, electronics])




    return (
        <div className="wrapper">
            {isLoading && <Loading text={"Loading..."} />}
            <div className="sidebar">
                <a className="active" href="#home">Categories</a>
                <div className="sidebar-container">
                    <input name="jewellery" checked={jewellery} onChange={() => setJewellery(!jewellery)} type="checkbox" />
                    <div> <p className="sidebar-para">Jewellery</p></div>
                    <div className="img_color_orange"></div>
                </div>
                <div className="sidebar-container">
                    <input type="checkbox" name="electronic" id="" checked={electronics} onChange={() => setElectronics(!electronics)} type="checkbox" />
                    <div> <p className="sidebar-para">Electornics</p></div>
                    <div className="img_color_lightBlue"></div>
                </div>
                <div className="sidebar-container">
                    <input type="checkbox" name="clothes" id="" checked={clothes} onChange={() => setClothes(!clothes)} type="checkbox" />
                    <div> <p className="sidebar-para">Clothes</p></div>
                    <div className="img_color_voilet"></div>
                </div>
                <div className="sidebar-container">
                    <input type="checkbox" name="jewellery" id="" checked={sports} onChange={() => setSports(!sports)} type="checkbox" />
                    <div> <p className="sidebar-para">Sports</p></div>
                    <div className="img_color_green"></div>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
