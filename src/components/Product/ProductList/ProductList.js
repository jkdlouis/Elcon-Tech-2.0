import React, { Fragment, useEffect, useState } from 'react';
import { debounce } from 'lodash/';
import Spinner from '../../UI/Spinner/Spinner';
import ProductFinder from './ProductFinder/ProductFinder';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import productDetailList from '../../../db/product-list';
import './ProductList.scss';

const productList = (props) => {
    const [ searchInputText, setSearchInputText ] = useState('');
    const [ filteredProductList, setFilteredProductList ] = useState([]);

    const { type } = props.match.params;

    useEffect(() => {
        if (type !== 'all') {
            filterProductListByParams();
        }
    }, [type])

    const onSearchTextHandler = (value) => {
        filterProductListBySearchText(value);
    };

    const filterProductListBySearchText = debounce(query => {
        setSearchInputText(query);
        setFilteredProductList(productDetailList.data.filter(product => product.series.toLowerCase().includes(query)));
    }, 500);

    const filterProductListByParams = () => {
        setFilteredProductList(productDetailList.data.filter(product => product.type.toLowerCase().includes(type.toLowerCase())));
    };

        let productList = <Spinner/>;

        if (productDetailList && productDetailList.data.length) {
            productList = productDetailList.data.map((product, index) => {
                return (
                    <ProductThumbnail key={ `${product.series}-${index}` } product={ product }/>
                )
            })
        }

    if (filteredProductList.length) {
            productList = filteredProductList.map((product, index) => {
                return (
                    <ProductThumbnail key={ `${product.series}-${index}` } product={ product }/>
                )
            })
        } else {
            if (searchInputText) {
                productList = (<strong className="fs-26">No product found.</strong>);
            }
        }

        return (
            <Fragment>
                { type === 'all' ? <ProductFinder onProductSearch={ onSearchTextHandler }/> : null }
                <div className="row justify-content-center align-items-center search-results">
                    { productList }
                </div>
            </Fragment>
        );
};

export default productList;