import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as URL from '../../constants';

export function* initialContactSaga() {
    try {
        const response = yield axios.get(URL.CONTACT_API);
        yield put(actions.getContactList(response.data.data));
    } catch(error) {
        yield put(actions.getContactListFail(error));
    }
}