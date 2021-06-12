import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrls } from "../../config";

const initialAuthState = { isAuthenticated: false, isLoading: false, isError: "" };
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        loginAPIRequested(state) {
            state.isLoading = true;
            state.isAuthenticated = false;
        },
        loginAPISuccess(state) {
            state.isLoading = false;
            state.isAuthenticated = true;
        },
        loginAPIFailure(state, action) {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.isError = action.payload
        }
    }
});

export const userAuthentication = (data) => {
    console.log("data", data);
    return (dispatch) => {
        dispatch(authActions.loginAPIRequested());
        axios({
            method: 'POST',
            url: `${apiUrls.baseUrl}/${apiUrls.path.authentication}`,
            data,
        }).then((response) => {
            console.log("response", response);
        }).catch((error) => {
            const errorMsg = error.message;
            dispatch(authActions.loginAPIFailure());
        });
    }
};

export const authActions = authSlice.actions;

export default authSlice.reducer;