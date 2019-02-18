import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as URL from '../../constants';

export function* initialTimeLineSaga(action) {
    try {
        const response = yield axios.get(URL.TIMELINE_API);
        yield put(actions.getTimeLine(response.data.data));
    } catch(error) {
        yield put(actions.getTimeLineFail())
    }
}