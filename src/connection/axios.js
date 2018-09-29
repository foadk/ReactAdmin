import Axios from 'axios';
import { alert } from '../utils/alert';

const instance = Axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

instance.interceptors.response.use(
    result => {
        if (result.data.hasOwnProperty('messages')) {
            result.data.messages.forEach(message => {
                alert(message);
            });
        }
        return result;
    },
    error => {
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
    }
);

export default instance;