import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrls } from "../../../config";

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

// export const userAuthentication = (data) => {
//     return (dispatch) => {
//         dispatch(authActions.loginAPIRequested());
//         axios({
//             method: 'post',
//             url: `${apiUrls.baseUrl}/authenticate`,
//             data
//         }).then((response) => {
//             if (response && response?.status === 200 && response.data.message === "Success") {
//                 localStorage.setItem('authData', JSON.stringify(response.data.responseData));
//                 dispatch(authActions.loginAPISuccess());
//             } else {
//                 let errMsg = response.data.responseData.message;
//                 console.log("errMsg", errMsg);
//                 dispatch(authActions.loginAPIFailure(errMsg));
//             }

//         }).catch((error) => {
//             const errorMsg = error.message;
//             dispatch(authActions.loginAPIFailure());
//         });
//     }
// };

export const authActions = authSlice.actions;

export default authSlice.reducer;