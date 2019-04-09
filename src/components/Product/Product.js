import React from 'react';
import Banner from '../UI/Banner/Banner';
import Button from '../UI/Button/Button';
import ProductCategory from './Product-Category/Product-Category';
import productCategoryList from '../../db/product-category';
import './Product.scss';

const product = (props) => {

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
                    <h5 className="dark-gray mb-3 mb-md-5 d-none d-md-block">Our ecosystem helps you to reach your product easier!</h5>
                    <Button
                        link="/product/all"
                        btnClass="btn-learn"
                        btnText="SEARCH NOW">
                        <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    </Button>
                </div>
            </div>
            <ProductCategory productCategoryList={ productCategoryList }/>
        </div>
    );
};

export default product;