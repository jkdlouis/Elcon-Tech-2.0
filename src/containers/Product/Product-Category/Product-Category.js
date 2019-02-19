import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './Product-Category.scss';

export class ProductCategory extends Component {

    state = {
        isHovered: {}
    };

    onMouseEnterHandler = index => {
        this.setState(prevState => {
            return { isHovered: { ...prevState.isHovered, [ index ]: true } };
        });
    };

    onMouseLeaveHandler = index => {
        this.setState(prevState => {
            return { isHovered: { ...prevState.isHovered, [ index ]: false } };
        });
    };

    render() {
        let productCategoryList = <Spinner/>;

        if (this.props.productCategoryList && this.props.productCategoryList.data.length) {
            productCategoryList = this.props.productCategoryList.data.map((data, index) => (
                <div className="col-12 col-md-4" key={`data.category-${index}`}
                     onMouseEnter={() => this.onMouseEnterHandler(index)}
                     onMouseLeave={() => this.onMouseLeaveHandler(index)}
                >
                    <div className="product position-relative">
                        <Link to={data.url}>
                            <div
                                className={`d-flex justify-content-center align-items-center background ${ data.backgroundClass }`}>
                                <h3 className={`title ${ this.state.isHovered[ index ] ? 'd-block' : 'd-none' }`}>
                                    { data.category }
                                    </h3>
                                <h3 className="title d-block d-md-none">
                                    { data.category }
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>
            ));
        }

        return (
            <div className="row text-center justify-content-center align-items-center product-category p-0 p-md-5">
                { productCategoryList }
            </div>
        );
    }

}

export default ProductCategory;