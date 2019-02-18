import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './Product-Category.scss';

export const productCategory = (props) => {
    let productCategoryList = <Spinner/>;

    if (props.productCategoryList && props.productCategoryList.data.length) {
        productCategoryList = props.productCategoryList.data.map(data => (
            <div className="col-12 col-md-4">
                <div className="product">
                    <Link to={ data.url }>
                        <div className={ `d-flex justify-content-center align-items-center background ${ data.backgroundClass }`}>
                            <h3 className="title">{ data.category }</h3>
                            <h3 className="title d-block d-md-none">
                                { data.category }
                                </h3>
                        </div>
                    </Link>
                </div>
            </div>
        ))
    }

    return (
        <div className="row text-center justify-content-center align-items-center product-category">
            { productCategoryList }
        </div>
    );
};

export default productCategory;