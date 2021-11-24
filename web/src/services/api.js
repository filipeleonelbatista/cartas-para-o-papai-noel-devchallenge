import axios from 'axios';

const api = axios.create({
  //baseURL: "http://localhost:3333",  
  baseURL: "https://cartasparaopapainoel.herokuapp.com/",
})

export default api;