import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://50-116-1-120.ip.linodeusercontent.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
    }
});


axiosInstance.interceptors.request.use( async (config) => {
    let token = await AsyncStorage.getItem("translationUserToken")
    
    token = JSON.parse(token)

    config.headers.Authorization = `Bearer ${token}`;

    return config;
}, error => Promise.reject(error));
export default axiosInstance;