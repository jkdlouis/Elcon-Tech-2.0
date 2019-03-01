import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    data: [],
    error: false
};

const productCategoryReducer = (state = initialState, action) => {
   switch(action.type) {
       case actionTypes.GET_PRODUCT_CATEGORY_LIST:
           return updateObject(state, { data: state.data.concat(action.productCategoryList) });
       case actionTypes.GET_PRODUCT_CATEGORY_LIST_FAIL:
           return updateObject(state, { error: true });
       default:
           return state;
   }
};

export default productCategoryReducer;