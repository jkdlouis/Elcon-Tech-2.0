import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const navigation = (props) => {
    return (
        <div className="row navigation">
            <div className="col-12 pl-0 pr-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-main-green">
                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#elconMainNav"
                            aria-controls="elconMainNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center"
                         id="elconMainNav">
                        <div className="navbar-nav">
                            <NavLink
                                className="nav-item nav-link mr-3"
                                exact={ props.exact }
                                activeClassName="active"
                                to="/">
                                Home
                                <span className="sr-only">(current)</span>
                            </NavLink>
                            <NavLink
                                className="nav-item nav-link mr-3"
                                exact={ props.exact }
                                to="/product">
                                Product
                            </NavLink>
                            <NavLink
                                className="nav-item nav-link mr-3"
                                exact={ props.exact }
                                to="/facility">
                                Facility
                            </NavLink>
                            <NavLink
                                className="nav-item nav-link"
                                exact={ props.exact }
                                to="/contact">
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default navigation;