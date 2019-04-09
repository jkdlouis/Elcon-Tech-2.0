import React from 'react';
import Banner from '../UI/Banner/Banner';
import Spinner from '../UI/Spinner/Spinner';
import ImageGallery from 'react-image-gallery';
import facilityGalleries from '../../db/facility'
import 'react-image-gallery/styles/scss/image-gallery.scss';
import './Facility.scss';

export const facility = (props) => {

    let facilityGallery = <Spinner/>;

    if (facilityGalleries && facilityGalleries.data.length) {
        facilityGallery = <ImageGallery items={facilityGalleries.data}/>
    }

    return (
        <div id="facility-page" className="text-center">
            <Banner
                title="Welcome to Elcon Facility Galleries"
                subtitle=""
                backgroundImage="facility-banner"
            />

            <div className="row justify-content-center align-items-center pb-5">
                <div className="col-12">
                    <h2 className="mt-5 mb-5">
                        <span className="main-green">*</span>
                        Facility Equipments
                        <span className="main-green">*</span>
                    </h2>
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                    {facilityGallery}
                </div>
            </div>
        </div>
    )
};

export default facility;