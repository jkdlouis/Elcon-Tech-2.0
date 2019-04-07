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
                id: placeholder,
                name: placeholder
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
        <form id="contact-form"
              action="https://formspree.io/0563.louis.huang@gmail.com"
              method="POST"
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
                    />
                ))
                }
            </fieldset>
            <button
                type="submit"
                value="Send"
                className={ `btn btn-lg send-btn ${formState.formIsValid ? '' : 'disabled' }`}
                disabled={ !formState.formIsValid }>
                Send
            </button>
        </form>
    );

    if (formState.isSubmitted) {
        form = (
            <div className="row mt-3">
                <div className="col-12 text-center">
                    <strong className="main-green thank-msg">
                        Thank you for submitting the form, our team will get back to you.
                    </strong>
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