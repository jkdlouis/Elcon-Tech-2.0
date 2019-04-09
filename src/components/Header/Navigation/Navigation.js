import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const navigation = (props) => {
    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-12 pr-0 pl-0">
                <Navbar collapseOnSelect expand="xl">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="col-auto col-sm-4 col-lg-6 text-center d-flex justify-content-center align-items-center pl-3">
                                    <Link to="/">Home</Link>
                                    <Link to="/product">Product</Link>
                                    <Link to="/facility">Facility</Link>
                                    <Link to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
};

export default navigation;