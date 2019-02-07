import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
};

const getTimeline = (state, action) => updateObject(state, {
    timeline: action.payload
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TIMELINE: return getTimeline(state, action);
        default:
            return state;
    }
};