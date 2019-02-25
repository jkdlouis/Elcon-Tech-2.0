import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';
import * as URL from '../../constants';

export function* initialFacilityGallerySaga() {
    try {
        const response = yield axios.get(URL.FACILITY_API);
        yield put(actions.getFacilityGalleries(response.data.data));
    } catch(error) {
        yield put(actions.getFacilityGalleriesFail(error));
    }
}