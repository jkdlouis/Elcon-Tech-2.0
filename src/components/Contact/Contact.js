import React from 'react';
import Form from '../UI/Form/Form';
import Banner from '../UI/Banner/Banner';
import Address from '../UI/Address/Address';
import contactList from '../../db/contact';
import './Contact.scss';

const contact = (props) => {

        return (
            <div id="contact-page" className="">
                <Banner
                    title="Contact Us"
                    subtitle={ `"Our professional team of customer care is ready to hear from you"` }
                    backgroundImage="contact-banner"
                />
                <div className="row justify-content-center align-items-center mt-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Form />
                    </div>
                </div>
                <div className="row office-section justify-content-center mt-5">
                    <Address contactList={ contactList }/>
                    </div>
            </div>
        )
};

export default contact;