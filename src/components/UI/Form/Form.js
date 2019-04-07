import React, { Fragment, useState } from 'react';
import Input from './Input/Input';
import { updateObject, checkValidity } from '../../../shared/utility'
import './Form.scss';

export const form = (props) => {

    const setupFormFields = (elementType, type, placeholder) => {
        return {
            elementType,
            elementConfig: {
                type,
                placeholder,
                id: placeholder
            },
            value: '',
            validation: {
                required: true,
                isEmail: false,
                isPhone: false
            },
            valid: false,
            touched: false
        }
    };

    const [ formState, setFormState ] = useState({
        form: {
            name: setupFormFields('input', 'text', 'Name'),
            company: setupFormFields('input', 'text', 'Company'),
            phone: setupFormFields('input', 'phone', 'Phone'),
            email: setupFormFields('input', 'email', 'Email'),
            message: setupFormFields('textarea', 'text', 'Message')
        },
        formIsValid: false,
        isSubmitted: false
    });

    const submitHandler = (event) => {
        if (formState.formIsValid) {
            alert('Your form has been submitted!');
            setFormState({ isSubmitted: true });
        } else {
            alert('Form is invalid')
        }
    };

    const inputChangeHandler = (event, inputIdentifier) => {
        if (inputIdentifier === 'phone') {
            formState.form[ inputIdentifier ].validation.isPhone = true;
        }

        if (inputIdentifier === 'email') {
            formState.form[ inputIdentifier ].validation.isEmail = true;
        }

        const updatedFormElement = updateObject(formState.form[ inputIdentifier ], {
            value: event.target.value,
            valid: checkValidity(event.target.value, formState.form[ inputIdentifier ].validation),
            touched: true
        });

        const updatedForm = updateObject(formState.form, {
            [ inputIdentifier ]: updatedFormElement
        });

        let formIsValid = true;

        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[ inputIdentifier ].valid && formIsValid;
        }

        setFormState({ form: updatedForm, formIsValid })
    };

    const formElementArray = [];

    for (let key in formState.form) {
        formElementArray.push({
            id: key,
            config: formState.form[ key ]
        });
    }

    let form = (
        <form action="http://formspree.io/0563louishuang@gmail.com"
              method="POST"
              onSubmit={ submitHandler }
              noValidate>
            <fieldset>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        fieldName={ formElement.id }
                        changed={(event) => inputChangeHandler(event, formElement.id)}
                        label={ formElement.config.elementConfig.placeholder }
                    />
                ))
                }
            </fieldset>
            <button
                type="submit"
                className={ `btn btn-lg send-btn ${formState.formIsValid ? '' : 'disabled'}`}>
                Send
            </button>
        </form>
    );

    if (formState.isSubmitted) {
        form = (
            <div className="row mt-3">
                <div className="col-12 text-center">
                    <strong className="main-green thank-msg">Thank you for submitting the form, our team will get back to you.</strong>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            { form }
        </Fragment>
    )
};

export default form;