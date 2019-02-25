import React, { Component } from 'react';
import Banner from '../../components/UI/Banner/Banner';

export class Facility extends Component {

    render() {
        return (
            <div id="facility-page" className="text-center">
                <Banner
                    title="Welcome to Elcon Facility Galleries"
                    subtitle=""
                    backgroundImage="facility-banner"
                />
                <div className="row">
                    <div className="col-12">
                        <h2>Facility</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Facility;