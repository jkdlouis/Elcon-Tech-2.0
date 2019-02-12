import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.scss';

const navigation = (props) => {
    return (
        <div className="row">
            <div className="col-12 pr-0 pl-0">
            <Navbar collapseOnSelect expand="xl">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-5">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/product">Product</Nav.Link>
                        <Nav.Link href="/facility">Facility</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    )
};

export default navigation;