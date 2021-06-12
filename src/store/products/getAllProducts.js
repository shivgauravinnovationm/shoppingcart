import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrls } from "../../config";
import history from '../../history';
const initialAuthState = { allProducts: null, isLoading: false, isError: "" };

const allProductsSlice = createSlice({
    name: 'getAllProducts',
    initialState: initialAuthState,
    reducers: {
        getAllProductsRequested(state) {
            state.isLoading = true;
        },
        getAllProductsSuccess(state, action) {
            state.isLoading = false;
            state.allProducts = action.payload;
        },
        getAllProductsFailure(state, action) {
            state.isLoading = false;
            state.isError = action.payload
        }
    }
});


export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(allProductsAction.getAllProductsRequested());
            const resp = await axios.get(`${apiUrls.baseUrl}/${apiUrls.path.allProducts}`);
            if (resp && resp?.status === 200 && resp?.data?.status == "Error") {
                let errMsg = resp?.data?.msg
                dispatch(allProductsAction.getAllProductsFailure(errMsg));
            } else {
                dispatch(allProductsAction.getAllProductsSuccess(resp?.data));
            }
        } catch (error) {
            const errorMsg = error.message;
            dispatch(allProductsAction.getAllProductsFailure(errorMsg));

        }
    }
}



export const allProductsAction = allProductsSlice.actions;

export default allProductsSlice.reducer;