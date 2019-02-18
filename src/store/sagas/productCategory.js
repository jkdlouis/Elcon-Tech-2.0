import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as URL from '../../constants';

export function* initialProductCategorySaga() {
    try {
        const response = yield axios.get(URL.PRODUCT_CATEGORY_API);
        yield put(actions.getProductCategoryList(response.data.data));
    } catch(error) {
        yield put(actions.getProductCategoryListFail(error))
    }
}