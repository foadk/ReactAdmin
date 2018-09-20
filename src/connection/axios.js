import Axios from 'axios';
import Alert from 'react-s-alert';

const instance = Axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

instance.interceptors.response.use(res => {
    if('messages' in res.data) {
        res.data.messages.forEach(message => {
            Alert[message['type']](message['message'], {
                position: message['position'] ? message['position'] : 'top-left',
                effect: 'scale',
                onShow: function () {
                    console.log('aye!')
                },
                // beep: false,
                timeout: message['timeout'] ? message['timeout'] : 10000,
                offset: 100
            });
        });
    }
    return res;
});

export default instance;