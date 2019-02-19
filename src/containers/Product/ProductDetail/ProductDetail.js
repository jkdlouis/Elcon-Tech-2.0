import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import './ProductDetail.scss';

export class ProductDetail extends Component {
    componentDidMount() {
        this.props.onInitProductList();
    }

    render() {
        let productList = <Spinner/>;

        if (this.props.productDetailList && this.props.productDetailList.data.length) {
            productList = this.props.productDetailList.data.map((product) => {
                    return (<div className="col-sm-3 col-md-4 thumbnail">
                        {/*<img src={ require(`${product.image}`) } alt={ product.alt }/>*/}
                        <div className="caption">
                            <ul className="list-unstyled">
                                <li>Series: { product.series }</li>
                                <li>Capacitance Range: { product.capacitance } </li>
                                <li>Rated Voltage Range: { product.ratedVoltage } </li>
                                <li>Operation Temperature Range: { product.operationTemp }&#8451</li>
                                <li>Load Life (at {product.loadLifeTitle}&#8451): { product.loadLife }</li>
                            </ul>
                            <Link to="product.templateUrl"
                                  className="btn btn-lg btn-learn"
                                  role="button">
                                Learn More
                            </Link>
                        </div>
                    </div>)
        })
        }

        return (
            <div className="row text-center justify-content-center align-items-center search-results">
                { productList }
            </div>
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