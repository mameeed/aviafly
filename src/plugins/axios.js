// src/plugins/axios.js
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "https://api.aviafly.uz" : "http://localhost/apitest", // Replace with your API base URL
    timeout: 15000, // Request timeout
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        // Do something before request is sent, like adding authorization headers
        // config.headers.Authorization = `Bearer ${store.state.token}`;
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    },
);

export default api;
