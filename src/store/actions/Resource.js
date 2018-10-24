import * as actionTypes from './actionTypes';
import { checkAuthState } from './Auth';
import Axios from '../../connection/axios';
import { networkErrorAlert } from '../../utils/alert';
import { authLogout } from './Auth';

export const prepareRequest = (tokenData, request, consumer, responseTitle) => dispatch => {
    dispatch(checkAuthState(tokenData.accessToken, tokenData.expirationDate,
        (token = tokenData.accessToken) => getResource(token, request, consumer, responseTitle)));
};

export const getResource = (accessToken, request, consumer, responseTitle) => dispatch => {
    Axios({
        method: request.method,
        url: request.url,
        data: request.data,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }).then(response => {
        const generatedResponse = {
            title: responseTitle,
            data: response.data
        };
        dispatch(addResponse(generatedResponse, consumer));
    }).catch(error => {
        if (error.response && 401 === error.response.status) dispatch(authLogout());
        if (error.message === 'Network Error') {
            networkErrorAlert();
        }
    });
};

export const addResponse = (response, consumer) => {
    return {
        type: actionTypes.ADD_RESPONSE,
        response: response,
        consumer: consumer
    };
};

export const deleteResponse = consumer => {
    return {
        type: actionTypes.DELETE_RESPONSE,
        consumer: consumer
    };
};