import React, { Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import './Header.scss';
import Logo from '../../assets/images/logos/elcon-logo.png';

const header = (props) => {
    return (
        <Fragment>
            <div className="row contact-header">
                <div className="col-12">
                    <ul className="list-unstyled list-inline d-flex justify-content-end align-items-center">
                        <li className="list-inline-item phone">
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
                        <img src={ Logo }
                             className="img-responsive elcon-logo"
                             alt="Elcon Logo"/>
                    </a>
                </div>
            </div>
            <Navigation/>
        </Fragment>
    )
};

export default header;