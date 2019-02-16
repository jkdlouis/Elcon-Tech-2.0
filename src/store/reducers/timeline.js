import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    data: []
};

const timeLineReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TIMELINE:
            return updateObject(state, { data: state.data.concat(action.data) });
        default:
            return state;
    }
};

export default timeLineReducer;