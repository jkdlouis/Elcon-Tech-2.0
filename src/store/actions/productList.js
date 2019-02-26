import * as actionTypes from './actionTypes';

export const initialProductDetailList = () => {
    return {
        type: actionTypes.INIT_PRODUCT_DETAIL_LIST
    }
};

export const getProductDetailList = (productDetailList) => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_LIST,
        productDetailList
    }
};

export const getProductDetailListFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_LIST_FAIL,
        error
    }
};