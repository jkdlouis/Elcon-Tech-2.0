import React, { Fragment } from 'react';
import './Header.scss';

const header = (props) => {
    return (
        <Fragment>
            <div className="row contact-header">
                <div className="col-12">
                    <ul className="list-unstyled list-inline pull-right">
                        <li className="phone">
                            <a href="mailto:info@elcon-fsd.com">
                                <i className="fa fa-envelope"></i>
                                info@elcon-fsd.com
                            </a>
                        </li>
                        <li className="email">
                            <a href="tel:852-69451164">
                                <i className="fa fa-phone"></i>
                                852-69451164
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
         <div className="row">
             <div className="col-12">
                 <a href="/home">
                     <img src="../../assets/images/logos/elcon-logo.jpg"
                          className="img-responsive elcon-logo"
                          alt="Elcon Logo"/>
                 </a>
             </div>
         </div>
        </Fragment>
   )
};

export default header;