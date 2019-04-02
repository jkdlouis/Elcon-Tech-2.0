import React, { Fragment } from 'react';
import Button from '../Button/Button';
import './Form.scss';

export const form = (props) => {

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(8);
    };

    return (
        <Fragment>
            <form name="contactForm" method="post" role="form" onSubmit={ formSubmit }
                  action="http://formspree.io/info@elcon-fsd.com" noValidate>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control" name="FullName" id="fullName" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" className="form-control" name="CompanyName" id="companyName" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="Email" className="form-control" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" name="Phone" className="form-control" id="phoneNumber" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="Message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="10">
                    </textarea>
                </div>
                <Button
                    link="/"
                    btnClass="btn btn-lg send-btn">
                    Send
                </Button>
            </form>
        </Fragment>
    )
};

export default form;