import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import './Product-Category.scss';

const productCategory = (props) => {

    const [ hoveredState, setHoveredState ] = useState({ isHovered: {} });

    const onMouseEnterHandler = index => {
        setHoveredState(prevState => {
            return { isHovered: { ...prevState.isHovered, [ index ]: true } };
        });
    };

    const onMouseLeaveHandler = index => {
        setHoveredState(prevState => {
            return { isHovered: { ...prevState.isHovered, [ index ]: false } };
        });
    };

    let productCategoryList = <Spinner/>;

    if (props.productCategoryList && props.productCategoryList.data.length) {
        productCategoryList = props.productCategoryList.data.map((data, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={`${data.category}-${index}`}
                 onMouseEnter={() => onMouseEnterHandler(index)}
                 onMouseLeave={() => onMouseLeaveHandler(index)}>
                <div className="product position-relative">
                    <Link to={ data.url }>
                        <div className={`d-flex justify-content-center align-items-center background ${ data.backgroundClass }`}>
                            <h3 className={`title ${ hoveredState.isHovered[ index ] ? 'd-block' : 'd-none' }`}>
                                { data.category }
                            </h3>
                            <h3 className="title d-block d-lg-none">
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
};

export default productCategory;