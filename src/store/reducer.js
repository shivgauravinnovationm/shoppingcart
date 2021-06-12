import { combineReducers } from "redux";
import authReducer from "./auth/auth";
import getAllProductsReducer from "./products/getAllProducts"

export default combineReducers({
    authReducer,
    getAllProductsReducer
})