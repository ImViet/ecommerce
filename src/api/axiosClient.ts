import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.escuelajs.co/api/v1/',
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