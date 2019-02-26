import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';
import * as URL from '../../constants';

export function* initialProductDetailSaga() {
    try {
        const response = yield axios.get(URL.PRODUCT_DETAIL_API);
        yield put(actions.getProductDetailList(response.data.data));
    } catch(error) {
        yield put(actions.getProductDetailListFail(error));
    }
}