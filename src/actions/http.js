import axios from 'axios'
const http = axios.create({
    // baseURL: 'http://localhost:5000/v1/'
    baseURL: 'https://llama-camavilca.c9users.io/v1/'
})
export default http;