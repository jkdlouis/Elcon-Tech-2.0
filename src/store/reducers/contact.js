import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    data: [],
    error: false
};

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_CONTACT_LIST:
            return updateObject(state, { data: state.data.concat(action.contactList) });
        case actionTypes.GET_CONTACT_LIST_FAIL:
            return updateObject(state, { error: true });
        default:
            return state;
    }
};

export default contactReducer;