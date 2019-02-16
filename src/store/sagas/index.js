import { takeEvery } from 'redux-saga/effects';
import { initialTimeLineSaga } from "./timeline";
import * as actionTypes from '../actions/actionTypes';

export function* watchTimeLine() {
    yield takeEvery(actionTypes.INIT_TIMELINE, initialTimeLineSaga);
}