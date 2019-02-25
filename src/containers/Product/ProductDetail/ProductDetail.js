import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash/';
import Spinner from '../../../components/UI/Spinner/Spinner';
import ProductFinder from './ProductFinder/ProductFinder';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import * as actions from '../../../store/actions/index';
import './ProductDetail.scss';

export class ProductDetail extends Component {
    state = {
        searchInputText: '',
        filteredProductList: []
    };

    componentDidMount() {
        this.props.onInitProductList();
    }

    onSearchTextHandler = (value) => {
        this.setFilteredProductList(value);
    };

    setFilteredProductList = debounce(query => {
        this.setState({
            searchInputText: query,
            filteredProductList: this.props.productDetailList.data.filter(product => product.series.toLowerCase().includes(query))
        });
    }, 500);

    render() {
        let productList = <Spinner/>;

        if (this.props.productDetailList && this.props.productDetailList.data.length) {
            productList = this.props.productDetailList.data.map((product) => {
                return (
                    <ProductThumbnail product={ product }/>
                )
            })
        }

        if (this.state.filteredProductList.length) {
            productList = this.state.filteredProductList.map((product) => {
                return (
                    <ProductThumbnail product={ product }/>
                )
            })
        } else {
            if (this.state.searchInputText) {
                productList = 'No product found.';
            }
        }

        return (
            <Fragment>
                <ProductFinder onProductSearch={ this.onSearchTextHandler }/>
                <div className="row text-center justify-content-center align-items-center search-results">
                    { productList }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        productDetailList: state.productDetailList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitProductList: () => dispatch(actions.initialProductDetailList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);