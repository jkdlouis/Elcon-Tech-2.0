import React from 'react';
import './Footer.scss';

const footer = (props) => {
    return (
        <footer>
            <div className="row text-center footer">
                <div className="col-xs-12">
                    <h1>Elcon Technology Co., Ltd</h1>
                    <h4>Add：Unit 901, 9/F, Hunghom Commercial Centre, Tower A, 39 Ma Tau Wei Road, Hunghom, Kln, Hong
                        Kong</h4>
                    <h4>Tel：852-69451164 Fax：852-23331569</h4>
                    <h5>Copyright &copy; 2016 Elcon | All Rights Reserved | Code and Built By <a
                        href="http://louishuang.info/" target="_blank">Louis Huang</a></h5>
                </div>
            </div>
            <div className="row hidden-xs hidden-sm">
                <div className="col-xs-12 text-center footerNav">
                    <ul className="list-unstyled list-inline">
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/about">About</a></li>
                        <li><a href="#/product">Product</a></li>
                        <li><a href="#/facility">Facility</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default footer;