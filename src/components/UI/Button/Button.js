import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const button = (props) => {
    return (
        <Link role="button" to={ props.link }
              className={ props.btnClass }>
            { props.btnText }
        </Link>
    )
};

export default button;