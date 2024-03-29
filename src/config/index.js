import DEV_VARS from "./env/dev";

export const apiUrls = {
    baseUrl: DEV_VARS.apiUrl,
    path: {
        authentication: `auth/login`,
        allProducts: `products`,
        jewellery: `products/category/jewelery`,
        electronics: `electronic`,
    }
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('token'));
    // return localStorage.getItem('token');
}
