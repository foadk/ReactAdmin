import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    breadcrumb: [],
    activeSidebarItem: null
};

const setBreadcrumb = (state, action) => {
    return updateObject(state, { breadcrumb: action.items });
};

const clearBreadcrumb = (state, action) => {
    return updateObject(state, { breadcrumb: [] });
};

const setActiveSidebarItem = (state, action) => {
    return updateObject(state, { activeSidebarItem: action.activeItem });
}

const clearActiveSidebarItem = (state, action) => {
    return updateObject(state, { activeSidebarItem: [] });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BREADCRUMB: return setBreadcrumb(state, action);
        case actionTypes.CLEAR_BREADCRUMB: return clearBreadcrumb(state, action);
        case actionTypes.SET_ACTIVE_SIDEBAR_ITEM: return setActiveSidebarItem(state, action);
        case actionTypes.CLEAR_ACTIVE_SIDEBAR_ITEM: return clearActiveSidebarItem(state, action);
        default: return state;
    }
};

export default reducer;