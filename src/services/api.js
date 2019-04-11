import axios from 'axios';

const api = axios.create({
    baseURL: 'https://update-de-arquivos.herokuapp.com/'
});

export default api;