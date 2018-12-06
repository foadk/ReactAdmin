import * as actionTypes from './actionTypes';
import Axios from '../../connection/axios';

export const fetchPermissions = (accessToken) => dispatch => {
    Axios.get('api/permissions/list', {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    })
        .then(({ data }) => {
            dispatch(setPermissions(data.permissions));
        })
        .catch(error => {
            console.log(error);
        });
}

export const setPermissions = permissions => {
    return {
        type: actionTypes.SET_PERMISSIONS,
        permissions: permissions
    }
}