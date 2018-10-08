import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    breadcrumb: []
};

const setBreadcrumb = (state, action) => {
    return updateObject(state, {breadcrumb: action.items});
};

const clearBreadcrumb = (state, action) => {
    return initialState;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BREADCRUMB: return setBreadcrumb(state, action);
        case actionTypes.CLEAR_BREADCRUMB: return clearBreadcrumb(state, action);
        default: return state;
    }
};

export default reducer;