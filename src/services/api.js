import axios from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=7883136f0ca1dedfe18a2d3c9e3290cb&language=pt=BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;