import * as actionTypes from './actionTypes';

export const initialProductCategoryList = () => {
    return {
        type: actionTypes.INIT_PRODUCT_CATEGORY_LIST
    }
};

export const getProductCategoryList = (productCategoryList) => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORY_LIST,
        productCategoryList
    }
};

export const getProductCategoryListFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORY_LIST_FAIL,
        error
    }
};

