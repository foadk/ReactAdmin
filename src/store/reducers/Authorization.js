import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    permissions: []
}

const setPermissions = (state, action) => {
    return updateObject(state, {permissions: action.permissions})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PERMISSIONS: return setPermissions(state, action);
        default: return state;
    }
};

export default reducer;