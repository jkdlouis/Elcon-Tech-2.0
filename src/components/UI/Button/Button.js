import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const button = (props) => {
    return (
        <Link role="button"
              to={ props.link }
              disabled={ props.disabled }
              className={ props.btnClass }>
            { props.btnText }
            { props.children }
        </Link>
    )
};

export default button;