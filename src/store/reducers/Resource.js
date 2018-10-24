import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    responses: {}
}

const addResponse = (state, action) => {
    const newResponses = updateObject(state.responses, { [action.consumer]: action.response });
    return updateObject(state, { responses: newResponses });
};

const deleteResponse = (state, action) => {
    delete state.responses[action.consumer];
    return updateObject(state, { responses: state.responses });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RESPONSE: return addResponse(state, action);
        case actionTypes.DELETE_RESPONSE: return deleteResponse(state, action);
        default: return state;
    }
};

export default reducer;