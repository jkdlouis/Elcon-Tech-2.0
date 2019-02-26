import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Banner from '../UI/Banner/Banner';
import Button from '../UI/Button/Button';
import ProductCategory from './Product-Category/Product-Category';
import * as actions from '../../store/actions/index';
import './Product.scss';

export const product = (props) => {

    useEffect(() => {
        props.onInitProductCategory()
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
                    <h2>Aluminum Electrolytic Capacitors Finder</h2>
                    <h4>Our ecosystem helps you reach to your product easier!</h4>
                    <Button
                        link="/product/product-detail"
                        btnClass="btn-learn"
                        btnText="SEARCH NOW">
                        <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    </Button>
                </div>
            </div>

            <ProductCategory productCategoryList={props.productCategoryList}/>

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