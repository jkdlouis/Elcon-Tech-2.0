import React from 'react';

const input = (props) => {
    let inputElement = null;
    let validationError = null;

    if (!props.invalid && props.touched) {
        validationError = <p className="text-danger">Please enter a valid { props.fieldName }.</p>;
    }

    if (!props.invalid && props.touched && props.fieldName === 'company') {
        validationError = <p className="text-danger">Please enter a valid { `${props.fieldName} name` }.</p>;
    }

    switch(props.elementType) {
        case ('input'):
            inputElement = <input
                className="form-control"
                { ...props.elementConfig }
                value={ props.value }
                onChange={ props.changed }/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className="form-control"
                { ...props.elementConfig }
                value={ props.value }
                onChange={ props.changed }
                cols="30"
                rows="10"/>;
            break;
        default:
            inputElement = <input
                className="form-control"
                { ...props.elementConfig }
                value={ props.value }
                onChange={ props.changed }/>;
    }

    return (
        <div className="form-group">
            { inputElement }
            { validationError }
        </div>
    )
};

export default input;