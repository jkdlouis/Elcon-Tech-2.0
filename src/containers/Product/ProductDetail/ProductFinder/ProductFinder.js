import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './ProductFinder.scss';

export class ProductFinder extends Component {
    render() {
        return (
                <div className="row text-center justify-content-center align-items-center" id="product-finder">
                    <div className="col-12">
                        <h1>Product Finder</h1>
                        <h4>Faster Product Search With Just Series Code Or Key Words</h4>
                        <InputGroup className="search-input" id="product-search">
                            <label htmlFor="product-search" className="sr-only">
                                Search Products
                            </label>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="product-search">
                                    <i className="fa fa-search search-icon"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Find product with series number"
                                aria-label="Product Finder"
                                aria-describedby="product-search"
                                onChange={ (event) => this.props.onProductSearch(event.target.value.toLowerCase()) }
                            />
                        </InputGroup>
                    </div>
                </div>
        );
    }
}

export default ProductFinder;

