import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    data: [],
    error: false
};

const productDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAIL_LIST:
            return updateObject(state, { data: state.data.concat(action.productDetailList) });
        case actionTypes.GET_PRODUCT_DETAIL_LIST_FAIL:
            return updateObject(state, { error: true });
        default:
            return state;
    }
};

export default productDetailReducer;