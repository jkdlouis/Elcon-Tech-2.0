import { takeEvery } from 'redux-saga/effects';
import { initialTimeLineSaga } from "./timeline";
import { initialProductCategorySaga } from './productCategory';
import { initialProductDetailSaga } from "./productDetail";
import { initialFacilityGallerySaga } from "./facility";
import * as actionTypes from '../actions/actionTypes';

export function* watchTimeLine() {
    yield takeEvery(actionTypes.INIT_TIMELINE, initialTimeLineSaga);
}

export function* watchProduct() {
    yield takeEvery(actionTypes.INIT_PRODUCT_CATEGORY_LIST, initialProductCategorySaga);
    yield takeEvery(actionTypes.INIT_PRODUCT_DETAIL_LIST, initialProductDetailSaga)
}

export function* watchFacility() {
    yield takeEvery(actionTypes.INIT_FACILITY_GALLERIES, initialFacilityGallerySaga)
}