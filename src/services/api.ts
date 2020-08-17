import axios from 'axios';

const api = axios.create({
    baseURL: "https://challenge-leads-db.herokuapp.com"
})

export default api;