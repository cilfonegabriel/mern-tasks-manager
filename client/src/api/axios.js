import axios from "axios";

const instance = axios.create({
    baseURL: 'HTTP://localhost:3000/api',
    withCredentials: true,
})

export default instance;