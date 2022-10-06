import axios from "axios";
import store from "../store/index";
import { GET_USER_TOKEN_GETTER } from "../store/StoreConstants";
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_API_URL,
    headers: {
        Accept: "application/json"
    }
});

axiosInstance.interceptors.request.use((config) => {
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default axiosInstance;