import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://127.0.0.1:8000/'
})

export default instance;