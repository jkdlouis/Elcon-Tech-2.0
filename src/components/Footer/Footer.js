import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const footer = (props) => {
    return (
        <footer>
            <div className="row text-center footer">
                <div className="col-12">
                    <h5>Elcon Technology Co., Ltd</h5>
                    <p className="address">
                        Add：Unit 901, 9/F, Hunghom Commercial Centre, Tower A, 39 Ma Tau Wei Road, Hunghom, Kln, Hong
                        Kong
                    </p>
                    <p className="phone">Tel：852-69451164 Fax：852-23331569</p>
                    <p className="footer-note">Copyright &copy; 2016 Elcon | All Rights Reserved | Code and Built By <a
                        href="http://louishuang.info/" target="_blank">Louis Huang</a></p>
                </div>
            </div>
            <div className="row d-none d-md-block">
                <div className="col-12 text-center footerNav">
                    <ul className="list-unstyled list-inline d-flex justify-content-center align-items-center">
                        <li className="list-inline-item mr-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="list-inline-item mr-3">
                            <Link to="/product">Product</Link>
                        </li>
                        <li className="list-inline-item mr-3">
                            <Link to="/facility">Facility</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default footer;