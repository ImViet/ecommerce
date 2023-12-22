import axios from "axios";

const instance = axios.create({
    baseURL : 'https://localhost:7290/api',
});

instance.interceptors.request.use((config) => {
    config.cancelToken = axios.CancelToken.source().token;
    return config;
});

instance.interceptors.response.use(
    (response) => {return response.data},
    (error) => {return Promise.reject(error)}
)
export default instance;