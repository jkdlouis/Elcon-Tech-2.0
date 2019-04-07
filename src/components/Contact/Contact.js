import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from '../UI/Form/Form';
import Banner from '../UI/Banner/Banner';
import Address from '../UI/Address/Address';
import * as actions from '../../store/actions/index';
import './Contact.scss';

const contact = (props) => {

    useEffect(() => {
        if (!props.contactList.data.length) {
            props.onInitContact()
        }
    }, []);

        return (
            <div id="contact-page" className="">
                <Banner
                    title="Contact Us"
                    subtitle={ `"Our professional team of customer care is ready to hear from you"` }
                    backgroundImage="contact-banner"
                />
                <div className="row justify-content-center align-items-center mt-3">
                    <div className="col-4">
                        <Form />
                    </div>
                </div>
                <div className="row office-section justify-content-center mt-5 mb-5">
                    <Address contactList={ props.contactList }/>
                    </div>
            </div>
        )
};

const mapStateToProps = state => {
    return {
        contactList: state.contactList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitContact: () => dispatch(actions.initialContactList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(contact);