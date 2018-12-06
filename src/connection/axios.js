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
        console.log({...error});
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
        if(403 === error.response.status) {
            if('Not authorized.' === error.response.data.error) {
                const alertMessage = {
                    type: 'error',
                    message: 'شما اجازه دسترسی به این بخش را ندارید!'
                };
                alert(alertMessage);
            }
        }
        return Promise.reject(error);
    }
);

export default instance;