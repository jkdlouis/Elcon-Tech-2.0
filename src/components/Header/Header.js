import React, { Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import { IMAGE_PATH } from "../../constants";
import './Header.scss';

const header = (props) => {

    return (
        <Fragment>
            <div className="row contact-header">
                <div className="col-12">
                    <ul className="list-unstyled list-inline d-flex justify-content-end align-items-center mt-3 mb-3">
                        <li className="list-inline-item phone mr-2 mr-md-5">
                            <a href="mailto:info@elcon-fsd.com">
                                <i className="fa fa-envelope"></i>
                                info@elcon-fsd.com
                            </a>
                        </li>
                        <li className="list-inline-item email">
                            <a href="tel:852-69451164">
                                <i className="fa fa-phone"></i>
                                852-69451164
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <a href="/home">
                        <img src={ `${IMAGE_PATH}/logos/elcon-logo.png` }
                             className="img-responsive elcon-logo w-100"
                             alt="Elcon Logo"/>
                    </a>
                </div>
            </div>
            <Navigation/>
        </Fragment>
    )
};

export default header;