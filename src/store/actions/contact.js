import * as actionTypes from './actionTypes';

export const initialContactList = () => {
    return {
        type: actionTypes.INIT_CONTACT_LIST
    }
};

export const getContactList = (contactList) => {
    return {
        type: actionTypes.GET_CONTACT_LIST,
        contactList
    }
};

export const getContactListFail = (error) => {
    return {
        type: actionTypes.GET_CONTACT_LIST_FAIL,
        error
    }
};