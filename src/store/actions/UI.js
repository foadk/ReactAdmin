import * as actionTypes from './actionTypes';

export const setBreadcrumb = items => {
    return {
        type: actionTypes.SET_BREADCRUMB,
        items: items
    }
}

export const clearBreadcrumb = items => {
    return {
        type: actionTypes.CLEAR_BREADCRUMB
    }
}