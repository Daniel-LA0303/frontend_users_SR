import axios from "axios";

const userApi = axios.create({
    baseURL: "http://localhost:8080/users",
})

userApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token_useraApp'),
    }

    return config;

})

export default userApi;