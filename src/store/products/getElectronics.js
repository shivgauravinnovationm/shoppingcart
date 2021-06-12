import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrls } from "../../config";
import history from '../../history';
const initialAuthState = { electronicsProducts: null, isLoading: false, isError: "" };

const electronicsSlice = createSlice({
    name: 'jewellery',
    initialState: initialAuthState,
    reducers: {
        getElectronicsRequested(state) {
            state.isLoading = true;
        },
        getElectronicsSuccess(state, action) {
            state.isLoading = false;
            state.electronicsProducts = action.payload;
        },
        getElectronicsFailure(state, action) {
            state.isLoading = false;
            state.isError = action.payload
        }
    }
});


export const getAllElectronics = () => {
    return async (dispatch) => {
        try {
            dispatch(electronicsActions.getElectronicsRequested());
            const resp = await axios.get(`${apiUrls.baseUrl}/electronic`);
            if (resp && resp?.status === 200 && resp?.data?.status == "Error") {
                let errMsg = resp?.data?.msg
                dispatch(electronicsActions.getElectronicsFailure(errMsg));
            } else {
                dispatch(electronicsActions.getElectronicsSuccess(resp?.data));
            }
        } catch (error) {
            const errorMsg = error.message;
            dispatch(electronicsActions.getElectronicsFailure(errorMsg));

        }
    }
}

export const electronicsActions = electronicsSlice.actions;

export default electronicsSlice.reducer;