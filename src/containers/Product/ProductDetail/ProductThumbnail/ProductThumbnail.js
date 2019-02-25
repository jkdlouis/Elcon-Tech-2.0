import React, { Component } from 'react';
import './ProductThumbnail.scss';

export class ProductThumbnail extends Component {
    render() {
        return (
            <div className="col-12 col-md-6 col-lg-3 thumbnail" key={ this.props.product.series }>
                <img src={ this.props.product.image } alt={ this.props.product.alt }/>
                <ul className="list-unstyled">
                    <li>Series: { this.props.product.series }</li>
                    <li>Capacitance Range: { this.props.product.capacitance } </li>
                    <li>Rated Voltage Range: { this.props.product.ratedVoltage } </li>
                    <li>Operation Temperature Range: { this.props.product.operationTemp }℃</li>
                    <li>Load Life (at { this.props.product.loadLifeTitle }℃): { this.props.product.loadLife }</li>
                </ul>
                <a role="button"
                   href={ this.props.product.filePath }
                   className="btn btn-learn"
                   target="_blank">
                    Download
                </a>
            </div>
        )
    }
}

export default ProductThumbnail;