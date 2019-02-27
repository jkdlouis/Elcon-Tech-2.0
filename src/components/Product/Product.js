import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Banner from '../UI/Banner/Banner';
import Button from '../UI/Button/Button';
import ProductCategory from './Product-Category/Product-Category';
import * as actions from '../../store/actions/index';
import './Product.scss';

const product = (props) => {

    useEffect(() => {
        props.onInitProductCategory();
    }, []);

    return (
        <div className="product-page" id="product-page">
            <Banner
                title="Elcon Products"
                subtitle="Providing a broad range of aluminum electrolytic capacitors for your needs"
                backgroundImage="product-banner"
            />

            <div className="row text-center product-finder">
                <div className="col-12">
                    <h3 className="dark-gray mb-3">Aluminum Electrolytic Capacitors Finder</h3>
                    <h5 className="dark-gray mb-5">Our ecosystem helps you to reach your product easier!</h5>
                    <Button
                        link="/product/all"
                        btnClass="btn-learn"
                        btnText="SEARCH NOW">
                        <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    </Button>
                </div>
            </div>
            <ProductCategory productCategoryList={ props.productCategoryList }/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        productCategoryList: state.productCategoryList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitProductCategory: () => dispatch(actions.initialProductCategoryList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(product);