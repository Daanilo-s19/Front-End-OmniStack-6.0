import axios from 'axios';

const api = axios.create({
  baseURL: "https://omnistack-sackend.herokuapp.com",
});

export default api;