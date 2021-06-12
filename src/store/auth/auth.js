import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrls } from "../../config";
import history from '../../history';
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
            console.log(response);
            if (response && response?.status === 200) {
                localStorage.setItem('token', JSON.stringify(response.data.token));
                history.push({
                    pathname: "/home",
                });
                dispatch(authActions.loginAPISuccess());
            } else {
                let errMsg = response.data.responseData.message;
                console.log("errMsg", errMsg);
                dispatch(authActions.loginAPIFailure(errMsg));
            }
        }).catch((error) => {
            const errorMsg = error.message;
            dispatch(authActions.loginAPIFailure());
        });
    }
};

export const authActions = authSlice.actions;

export default authSlice.reducer;