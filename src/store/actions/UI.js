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

export const setActiveSidebarItem = items => {
    return {
        type: actionTypes.SET_ACTIVE_SIDEBAR_ITEM,
        activeItem: items
    }
}

export const clearActiveSidebarItem = items => {
    return {
        type: actionTypes.CLEAR_ACTIVE_SIDEBAR_ITEM
    }
}