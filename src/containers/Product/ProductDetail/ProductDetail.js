import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash/';
import Spinner from '../../../components/UI/Spinner/Spinner';
import ProductFinder from './ProductFinder/ProductFinder';
import Button from '../../../components/UI/Button/Button';
import * as actions from '../../../store/actions/index';
import './ProductDetail.scss';

export class ProductDetail extends Component {
    state = {
        searchInputText: null,
        filteredProductList: []
    };

    componentDidMount() {
        this.props.onInitProductList();
    }

    setFilteredProductList = debounce(query => {
        this.setState({
            searchInputText: query,
            filteredProductList: this.props.productDetailList.data.filter(product => product.series.toLowerCase() === query)
        });
    }, 500);

    onSearchTextHandler = (value) => {
       this.setFilteredProductList(value);
    };

    render() {
        let productList = <Spinner/>;

        if (this.props.productDetailList && this.props.productDetailList.data.length && !this.state.searchInputText) {
            productList = this.props.productDetailList.data.map((product) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-3 thumbnail" key={ product.series }>
                                <img src={ product.image } alt={ product.alt }/>
                                <ul className="list-unstyled">
                                    <li>Series: { product.series }</li>
                                    <li>Capacitance Range: { product.capacitance } </li>
                                    <li>Rated Voltage Range: { product.ratedVoltage } </li>
                                    <li>Operation Temperature Range: { product.operationTemp }℃</li>
                                    <li>Load Life (at { product.loadLifeTitle }℃): { product.loadLife }</li>
                                </ul>
                                <Button
                                    link={ product.filePath }
                                    btnClass="btn btn-learn"
                                    btnText="Download"
                                />
                            </div>
                        )
            })
        }

        if (this.state.filteredProductList.length) {
            productList = this.state.filteredProductList.map((product) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-3 thumbnail" key={ product.series }>
                            <img src={ product.image } alt={ product.alt }/>
                            <ul className="list-unstyled">
                                <li>Series: { product.series }</li>
                                <li>Capacitance Range: { product.capacitance } </li>
                                <li>Rated Voltage Range: { product.ratedVoltage } </li>
                                <li>Operation Temperature Range: { product.operationTemp }℃</li>
                                <li>Load Life (at { product.loadLifeTitle }℃): { product.loadLife }</li>
                            </ul>
                            <Button
                                link={ product.filePath }
                                btnClass="btn btn-learn"
                                btnText="Download"
                            />
                        </div>
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