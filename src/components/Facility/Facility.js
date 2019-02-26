import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../UI/Banner/Banner';
import Spinner from '../UI/Spinner/Spinner';
import ImageGallery from 'react-image-gallery';
import * as actions from '../../store/actions/index';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import './Facility.scss';

export class Facility extends Component {

    componentDidMount() {
        this.props.onInitFacilityGalleries();
    }

    render() {
        let facilityGallery = <Spinner/>;
        if (this.props.facilityGalleries && this.props.facilityGalleries.data.length) {
            facilityGallery = <ImageGallery items={ this.props.facilityGalleries.data } />

        }
            return (
                <div id="facility-page" className="text-center">
                    <Banner
                        title="Welcome to Elcon Facility Galleries"
                        subtitle=""
                        backgroundImage="facility-banner"
                    />
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12">
                            <h2>
                                <span className="main-green">*</span>
                                Facility
                                <span className="main-green">*</span>
                            </h2>
                        </div>
                        <div className="col-6">
                            { facilityGallery }
                        </div>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        facilityGalleries: state.facilityGalleries
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitFacilityGalleries: () => dispatch(actions.initialFacilityGalleries())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Facility);