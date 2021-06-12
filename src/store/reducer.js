import { combineReducers } from "redux";
import authReducer from "./auth/auth";
import getAllProductsReducer from "./products/getAllProducts"
import getAllJewelleryReducer from "./products/getJewellery"
export default combineReducers({
    authReducer,
    getAllProductsReducer,
    getAllJewelleryReducer
})