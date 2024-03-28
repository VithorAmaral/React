import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=e3c7ccb5f2c94e9b77e93e6ba3c1f318&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;