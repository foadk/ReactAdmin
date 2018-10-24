import Axios from 'axios';
import { alert } from '../utils/alert';

const axiosWithTokenHeader = Axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
});

// axiosWithTokenHeader.defaults.headers.common['Accept'] = 'application/json';
// axiosWithTokenHeader.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');

axiosWithTokenHeader.interceptors.response.use(
    result => {
        if (result.data.hasOwnProperty('messages')) {
            result.data.messages.forEach(message => {
                alert(message);
            });
        }
        return result;
    },
    error => {
        console.log(error);
        console.log(error.response);
        console.log(error.response.status);
        // Handle server server side form validation failure
        if (error.message === 'Request failed with status code 422') {
            for (let errorKey in error.response.data.errors) {
                error.response.data.errors[errorKey].forEach(message => {
                    const alertMessage = {
                        type: 'error',
                        message: message
                    };
                    alert(alertMessage);
                });
            }
        }
        return Promise.reject(error);
    }
);

export default axiosWithTokenHeader;