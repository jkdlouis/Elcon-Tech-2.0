import React, { Component } from 'react';
import Banner from '../../components/UI/Banner/Banner';
import Button from '../../components/UI/Button/Button';
import './Product.scss';

export class Product extends Component {
    render() {
        return (
            <div className="product-page" id="product-page">
                <Banner
                 title="Elcon Products"
                 subtitle="Providing a broad range of aluminum electrolytic capacitors for your needs"
                 backgroundImage="product-banner"
                />

                <div className="row text-center product-finder">
                    <div className="col-12">
                        <h2>Aluminum Electrolytic Capacitors Finder</h2>
                        <h4>Our ecosystem helps you reach to your product easier!</h4>
                        <Button
                         link="/product/product-finder"
                         btnClass="btn-learn"
                         btnText="SEARCH NOW">
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                        </Button>
                    </div>
                </div>

                <div className="row text-center product-category">
                    <div className="col-12 col-md-4">
                        <div className="product" ng-mouseenter="solidChip = true" ng-mouseleave=" solidChip = false">
                            <a href="#/product/solid-chip">
                                <div className="solid-chip">
                                    <h3 ng-show="solidChip" className="title">Solid Chip Type</h3>
                                    <h3 className="title visible-xs visible-sm">Solid Chip Type</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="product" ng-mouseenter="solidLead = true" ng-mouseleave=" solidLead= false">
                            <a href="#/product/solid-lead">
                                <div className="solid-lead">
                                    <h3 ng-show="solidLead" className="title">Solid Lead Type</h3>
                                    <h3 className="title visible-xs visible-sm">Solid Lead Type</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="product" ng-mouseenter="chipType = true" ng-mouseleave=" chipType = false">
                            <a href="#/product/chip-type">
                                <div className="chip-type">
                                    <h3 ng-show="chipType" className="title">Chip Type Series</h3>
                                    <h3 className="title visible-xs visible-sm">Chip Type Series</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12 col-md-push-2">
                            <div className="col-12 col-md-4">
                                <div className="product" ng-mouseenter="miniature = true" ng-mouseleave=" miniature = false">
                                    <a href="#/product/miniature">
                                        <div className="miniature">
                                            <h3 ng-show="miniature" className="title">Miniature Series</h3>
                                            <h3 className="title visible-xs visible-sm">Miniature Series</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="product" ng-mouseenter="open = true" ng-mouseleave=" open = false">
                                    <a href="#/product/high-rip">
                                        <div className="high-rip">
                                            <h3 ng-show="open" className="title">High Ripple Low ESR Series</h3>
                                            <h3 className="title visible-xs visible-sm">High Ripple Low ESR</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12 col-md-push-2">
                            <div className="col-12 col-md-4">
                                <div className="product" ng-mouseenter="snapIn = true" ng-mouseleave=" snapIn = false">
                                    <a href="#/product/snap-in">
                                        <div className="snap-in">
                                            <h3 ng-show="snapIn" className="title">Snap-in Terminal Series</h3>
                                            <h3 className="title visible-xs visible-sm">Snap-in Terminal</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="product" ng-mouseenter="specialApp = true" ng-mouseleave=" specialApp = false">
                                    <a href="#/product/special-app">
                                        <div className="special-app">
                                            <h3 ng-show="specialApp" className="title">Special Application Series</h3>
                                            <h3 className="title visible-xs visible-sm">Special Application</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

export default Product;