import DEV_VARS from "./env/dev";

export const apiUrls = {
    baseUrl: DEV_VARS.apiUrl,
    path: {
        authentication: `auth/login`,
    }
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('token'));
    // return localStorage.getItem('token');
}
