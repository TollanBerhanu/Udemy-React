import axios from "axios";

// Axios Instances can be used to create different default configurations for different parts of the code
// For example if we have different BaseURLs or different Headers
// The instances will keep the global axios.defaults (not the interceptors) and overwrite what is defined here
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

// axiosInstance.interceptors.request... You can also add interceptors here

export default axiosInstance