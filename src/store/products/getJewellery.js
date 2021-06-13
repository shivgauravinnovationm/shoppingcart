import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrls } from "../../config";
import history from '../../history';
const initialAuthState = { jewelleryProducts: null, isLoading: false, isError: "", jewelleryChecked: false };

const jewellerySlice = createSlice({
    name: 'jewellery',
    initialState: initialAuthState,
    reducers: {
        getjewelleryRequested(state) {
            state.isLoading = true;
        },
        getjewellerySuccess(state, action) {
            state.isLoading = false;
            state.jewelleryProducts = action.payload;
        },
        getjewelleryFailure(state, action) {
            state.isLoading = false;
            state.isError = action.payload
        },
        jewelleryCheck(state, action) {
            return { ...state, jewelleryChecked: action.payload }
            console.log("jewellery", action);
        },
    }
});


export const getAllJewellery = () => {

    return async (dispatch) => {
        try {
            dispatch(jewelleryActions.getjewelleryRequested());

            const resp = await axios.get(`${apiUrls.baseUrl}/${apiUrls.path.jewellery}`);
            if (resp && resp?.status === 200 && resp?.data?.status == "Error") {
                let errMsg = resp?.data?.msg
                dispatch(jewelleryActions.getjewelleryFailure(errMsg));
            } else {
                dispatch(jewelleryActions.getjewellerySuccess(resp?.data));
            }
        } catch (error) {
            const errorMsg = error.message;
            dispatch(jewelleryActions.getjewelleryFailure(errorMsg));

        }
    }
}

export const jewelleryActions = jewellerySlice.actions;

export default jewellerySlice.reducer;