import * as actionTypes from './actionTypes';
import Axios from '../../connection/axios';
import { clientId, clientSecret } from '../../env';
import { networkErrorAlert } from '../../utils/alert';

export const getAccessToken = (email, password) => dispatch => {
    Axios.post('oauth/token', {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: email,
        password: password,
        scope: ''
    }).then(({ data }) => {
        dispatch(authSuccess(data.access_token, data.refresh_token, data.expires_in));
    }).catch(error => {
        if (error.message === 'Network Error') {
            networkErrorAlert();
        }
    });
};

export const refreshAccessToken = (callback = null) => dispatch => {
    Axios.post('oauth/token', {
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: localStorage.getItem('refreshToken'),
        scope: ''
    }).then(({ data }) => {
        dispatch(authSuccess(data.access_token, data.refresh_token, data.expires_in));
        if (callback) dispatch(callback(data.access_token));
    }).catch(error => {
        if (error.response && 401 === error.response.status) dispatch(authLogout());
        if (error.message === 'Network Error') {
            networkErrorAlert();
            dispatch(setStatus('unknown'));
        }
    });
};

export const authSuccess = (accessToken, refreshToken, expiresIn) => dispatch => {
    const expirationDate = new Date((new Date).getTime() + expiresIn * 1000);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('expirationDate', expirationDate);
    dispatch(setToken(accessToken, refreshToken, expirationDate));
};

export const setToken = (accessToken, refreshToken, expirationDate) => {
    return {
        type: actionTypes.SET_TOKEN,
        accessToken: accessToken,
        refreshToken: refreshToken,
        expirationDate: expirationDate
    }
}

export const checkAuthState = (accessToken, expirationDate, callback = null) => dispatch => {
    dispatch(setStatus('loading'));
    if (!accessToken) {
        if (localStorage.getItem('accessToken')) {
            if (new Date(localStorage.getItem('expirationDate')) > (new Date())) {
                dispatch(setToken(
                    localStorage.getItem('accessToken'),
                    localStorage.getItem('refreshToken'),
                    localStorage.getItem('expirationDate')
                ));
            } else {
                dispatch(refreshAccessToken(callback));
            }
        } else {
            dispatch(setStatus('notAuthenticated'));
        }
    } else {
        if ((new Date(expirationDate)) > (new Date())) {
            dispatch(setStatus('authenticated'));
            if (callback) dispatch(callback());
        } else {
            dispatch(refreshAccessToken(callback));
        }
    }
}

export const setStatus = status => {
    return {
        type: actionTypes.SET_STATUS,
        status: status
    }
}

export const authLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expirationDate');
    return { type: actionTypes.AUTH_LOGOUT };
};