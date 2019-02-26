import React from 'react';
import './ProductThumbnail.scss';

const productThumbnail = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 thumbnail" key={props.product.series}>
            <img src={props.product.image} alt={props.product.alt}/>
            <ul className="list-unstyled">
                <li>Series: {props.product.series}</li>
                <li>Capacitance Range: {props.product.capacitance} </li>
                <li>Rated Voltage Range: {props.product.ratedVoltage} </li>
                <li>Operation Temperature Range: {props.product.operationTemp}℃</li>
                <li>Load Life (at {props.product.loadLifeTitle}℃): {props.product.loadLife}</li>
            </ul>
            <a role="button"
               href={props.product.filePath}
               className="btn btn-learn"
               target="_blank">
                Download
            </a>
        </div>
    )
}

export default productThumbnail;