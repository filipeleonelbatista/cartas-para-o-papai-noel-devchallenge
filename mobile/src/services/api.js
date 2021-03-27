import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.100.7:3333',
    baseURL: "https://cartasparaopapainoel.herokuapp.com",
});

export default api;