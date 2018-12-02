import axios from 'axios'
const http = axios.create({
    // baseURL: 'http://localhost:5000/v1/'
    baseURL: 'http://localhost:8989/v1/'
})
export default http;