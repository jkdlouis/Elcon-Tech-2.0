import * as actionTypes from './actionTypes';

export const initialFacilityGalleries = () => {
    return {
        type: actionTypes.INIT_FACILITY_GALLERIES
    }
};

export const getFacilityGalleries = (facilityGalleries) => {
    return {
        type: actionTypes.GET_FACILITY_GALLERIES,
        facilityGalleries
    }
};

export const getFacilityGalleriesFail = (error) => {
    return {
        type: actionTypes.GET_FACILITY_GALLERIES_FAIL,
        error
    }
};
