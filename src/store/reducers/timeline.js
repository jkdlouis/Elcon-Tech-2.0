import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    data: [],
    error: false
};

const timeLineReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TIMELINE:
            return updateObject(state, { data: state.data.concat(action.timeLine) });
        case actionTypes.GET_TIMELINE_FAIL:
            return updateObject(state, { error: true });
        default:
            return state;
    }
};

export default timeLineReducer;