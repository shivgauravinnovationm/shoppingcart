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
            const resp = await axios.get(`${apiUrls.baseUrl}/${apiUrls.path.allProducts}`);
            if (resp && resp?.status === 200 && resp?.data?.status == "Error") {
                let errMsg = resp?.data?.msg
                dispatch(allProductsAction.getAllProductsFailure(errMsg));
            } else {
                dispatch(allProductsAction.getAllProductsSuccess(resp?.data));
            }
        } catch (error) {
            const errorMsg = error.message;
            dispatch(allProductsAction.getAllProductsSuccess(errorMsg));

        }
    }
}

// export const getAllProducts = () => {

//     return (dispatch) => {
//         dispatch(allProductsAction.getAllProductsRequested());
//         axios({
//             method: 'GET',
//             url: `${apiUrls.baseUrl}/${apiUrls.path.allProducts}`,
//         }).then((response) => {
//             console.log(response);

//             if (response && response?.status === 200 && response?.data?.status == "Error") {
//                 let errMsg = response?.data?.msg
//                 dispatch(allProductsAction.getAllProductsFailure(errMsg));
//             } else {
//                 dispatch(allProductsAction.getAllProductsSuccess(response?.data));
//             }
//         }).catch((error) => {
//             const errorMsg = error.message;
//             dispatch(allProductsAction.getAllProductsFailure(errMsg));

//         });
//     }
// };

export const allProductsAction = allProductsSlice.actions;

export default allProductsSlice.reducer;