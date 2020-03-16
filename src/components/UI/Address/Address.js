import React from 'react';
import Spinner from '../Spinner/Spinner';
import './Address.scss';

const address = (props) => {
    let contactList = <Spinner/>;

    if (props.contactList && props.contactList.data.length) {
        contactList = props.contactList.data.map((data) => (
            <div className="col-12 col-md-6 col-lg-4" key={ data.title }>
                <address className="d-flex flex-column justify-content-around">
                    <p><strong>{ data.title }</strong></p>
                    <p>Type: { data.type }</p>
                    <p>Tel：{ data.phone }</p>
                    <p>Fax：{ data.fax }</p>
                    <p className={ data.webLink ? 'd-block' : 'd-none' }>Web：
                        <a href={ data.webLink }
                        target="_blank"
                        rel="noopener noreferrer">
                        { data.webText }
                        </a>
                    </p>
                    <p> E-mail：<a href={ data.email }>{ data.email }</a></p>
                    <p>Add：{ data.address }</p>
                </address>
            </div>
        ));
    }
    return (
        <>
            { contactList }
        </>
    )
};

export default address;