import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-rocketmovies-vbt1.onrender.com'
});
