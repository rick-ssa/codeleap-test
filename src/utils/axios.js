import axios from "axios";

const axiosInstance = axios.create({baseURL: 'https://dev.codeleap.co.uk/careers/'})

export default axiosInstance