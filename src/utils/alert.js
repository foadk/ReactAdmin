import Alert from 'react-s-alert';

export const alert = (message) => {
    Alert[message['type']](message['message'], {
        position: message['position'] ? message['position'] : 'top-left',
        effect: 'scale',
        // onShow: function () {
        //     console.log('aye!')
        // },
        // beep: false,
        timeout: message['timeout'] ? message['timeout'] : 10000,
        offset: 100
    });
}