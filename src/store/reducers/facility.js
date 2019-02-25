import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    data: [],
    error: false
};

const facilityReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_FACILITY_GALLERIES:
            return updateObject(state, { data: state.data.concat(action.facilityGalleries) });
        case actionTypes.GET_FACILITY_GALLERIES_FAIL:
            return updateObject(state, { error: true });
        default:
            return state;
    }
};

export default facilityReducer;