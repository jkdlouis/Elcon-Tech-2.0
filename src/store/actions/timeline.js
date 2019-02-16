import * as actionTypes from './actionTypes';

export const getTimeLine = (timeLine) => {
    return {
        type: actionTypes.GET_TIMELINE,
        timeLine
    }
};

export const getTimeLineFail = (error) => {
    return {
        type: actionTypes.GET_TIMELINE_FAIL,
        error
    }
};

export const initialTimeLine = () => {
    return {
        type: actionTypes.INIT_TIMELINE
    }
};
