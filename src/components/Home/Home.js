import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import CallOutPanel from '../UI/CalloutPanel/CalloutPanel';
import Button from '../UI/Button/Button';
import TimeLine from '../UI/Timeline/Timeline';
import * as actions from '../../store/actions/index';
import './Home.scss';

const home = (props) => {

    useEffect(() => {
        if (!props.timeLine.data.length) {
            props.onInitTimeLine();
        }
    }, []);

    return (
        <div className="home" id="home">
            <div className="row d-none d-md-block">
                <div className="col-12 p-0">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/images/carousel/home_ribbon.jpg"
                                alt="First slide"
                            />
                            <Button link="/#about"
                                    btnText="About Us"
                                    btnClass="d-block d-md-none"
                            />
                            <CallOutPanel
                                description="Our Professional Team Is Here To Help You"
                                link="/#about"
                                btnText="About Us"
                                btnClass="btn-learn"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/images/carousel/component_supply_chain.jpg"
                                alt="Second slide"
                            />
                            <Button link="/product"
                                    btnText="View Product"
                                    btnClass="d-block d-md-none"
                            />
                            <CallOutPanel
                                description="Elcon Technology Only Offers High Quality Electrolytic Capacitors"
                                link="/product"
                                btnText="View Product"
                                btnClass="btn-learn"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/images/carousel/customer_relationship.jpg"
                                alt="Third slide"
                            />
                            <Button className="d-block d-md-none"
                                    link="/contact"
                                    btnText="Contact Us"
                                    btnClass="d-block d-md-none"
                            />
                            <CallOutPanel
                                description="Our Professional Team Is Here To Help You"
                                link="/contact"
                                btnText="Contact Us"
                                btnClass="btn-learn"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="about text-center" id="about">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>
                            <span className="main-green">*</span>
                            About US
                            <span className="main-green">*</span>
                        </h1>
                        <p>Elcon Technology manufactures high-quality aluminum electrolytic capacitors for use in
                            consumer
                            electronics, communication technology, LED lighting, medical equipment, automotive
                            electronics, and
                            many other fields. We have been manufacturing since 1990. Our head office is located in
                            Shaoguao with a factory
                            spanning 40,000 sq. m. We employ a team of over 400 employees.
                            Elcon is constantly involved in the development, production, and sales of aluminum
                            capacitors that
                            are essential for electronic equipment.
                            With more than 25 years of experience in designing and manufacturing:
                            We have established a strict process of quality inspection to ensure our products are
                            superior.
                            Our manufacturing technology is well-developed and stable.
                            Our core business philosophy is “Dare First, Integrity, and Win-Win”. With the efforts
                            of
                            our
                            highly-competent staff, we continuously strengthen our core competitive advantages in
                            this
                            industry.
                            We strive to provide our clients with outstanding customer service and high-quality
                            products.
                            We are committed to creating a model business enterprise through our well-trained staff
                            and
                            embrace
                            a customer centric mentality.</p>
                    </div>
                </div>
            </div>

            <div className="row history">
                <div className="col-12 pr-0 pl-0">
                    <h2 className="text-center">
                        <span className="main-green">*</span>
                        History
                        <span className="main-green">*</span>
                    </h2>
                    <TimeLine
                        timeLineData={ props.timeLine }
                    />
                </div>
            </div>
            <div className="certificate">
                <div className="row text-center">
                    <div className="col-12 d-fex justify-content-center align-items-center">
                        <h3 className="title-line">
                            <span className="main-green">*</span>
                            Certificates
                            <span className="main-green">*</span>
                        </h3>
                        <h4>We Are a Certified Supplier Of Aluminum Electrolytic Capacitors</h4>
                        <img className="img-responsive w-100"
                             src="assets/images/backgrounds/certificates.jpg"
                             alt="Elcon Business Certificate"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        timeLine: state.timeLine
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTimeLine: () => dispatch(actions.initialTimeLine())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(home);