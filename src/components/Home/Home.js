import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Certificate from '../../assets/images/backgrounds/certificates.jpg';
import slideOne from '../../assets/images/carousel/home_ribbon.jpg';
import slideTwo from '../../assets/images/carousel/component_supply_chain.jpg';
import slideThree from '../../assets/images/carousel/customer_relationship.jpg';
import CallOutPanel from '../../components/UI/CalloutPanel/CalloutPanel';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Home.scss';

const home = (props) => {

    return (
        <div className="home" id="home">
            <div className="row">
                <div className="col-12 p-0">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ slideOne }
                                alt="First slide"
                            />
                            <CallOutPanel
                                description="Our Professional Team Is Here To Help You"
                                link="/#about"
                                btnText="About Us"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ slideTwo }
                                alt="Second slide"
                            />
                            <CallOutPanel
                                description="Elcon Technology Only Offers High Quality Electrolytic Capacitors"
                                link="/product"
                                btnText="View Product"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ slideThree }
                                alt="Third slide"
                            />
                            <CallOutPanel
                                description="Our Professional Team Is Here To Help You"
                                link="/contact"
                                btnText="Contact Us"
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
                            Our core business philosophy is “Dare First, Integrity, and Win-Win”. With the efforts of
                            our
                            highly-competent staff, we continuously strengthen our core competitive advantages in this
                            industry.
                            We strive to provide our clients with outstanding customer service and high-quality
                            products.
                            We are committed to creating a model business enterprise through our well-trained staff and
                            embrace
                            a customer centric mentality.</p>
                    </div>
                </div>
            </div>

            <div className="row history">
                <div className="col-12">
                    <h2 className="text-center">
                        <span className="main-green">*</span>
                        History
                        <span className="main-green">*</span>
                    </h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work odd"
                            date="1990"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Electronics Co., Ltd.</h3>
                            <h4 className="vertical-timeline-element-subtitle">Yangzhou, China</h4>
                            <p>
                                Established Aijiang Industrial Co., Ltd . Founded Lingda Electronics Co., Ltd. in Yangzhou.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work even"
                            date="1994"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Meijiang Electronics Co. Ltd.</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dongguan Huang Jiang, China</h4>
                            <p>
                                Founded Aigao Electronics Co. Ltd in Nanjing. Established the Meijiang Electronics Co. Ltd. in Dongguan Huang Jiang.(Passed certification of THOMSO from France）
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1995"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">SHOEI</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dongguan, China</h4>
                            <p>
                                Cooperated with SHOEI and supply OEM service for SHOEI, mainly for Japanese customers.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1996"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">SOSHIN, TOSHIN, SHOEI</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dongguan, China</h4>
                            <p>
                                Cooperated with several Japan cooperation with OEM service, including SOSHIN, TOSHIN, SHOEI, NIC and so on.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="1998"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Aijiang Electronics Co. Ltd.</h3>
                            <h4 className="vertical-timeline-element-subtitle">Shenzhen, China</h4>
                            <p>
                                The establishment of the Shenzhen Aijiang Electronics Co. Ltd.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2000"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Ai Jiang Electronics Factory</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dongguan, China</h4>
                            <p>
                                Established Dongguan Ai Jiang Electronics Factory.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Dongguan Li Jiang factory</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dongguan, China</h4>
                            <p>
                                Established Dongguan Li Jiang factory.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2004"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Research and Production</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dongguan, China</h4>
                            <p>
                                Begin the Research and production of Polymer aluminum electric capacitors.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2014"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Shaoguan Fushida Electronic Technology Co. Ltd.</h3>
                            <h4 className="vertical-timeline-element-subtitle">Guangdong, China</h4>
                            <p>
                                Completed the resources integration and founded Shaoguan Fushida Electronic Technology Co. Ltd. in Guangdong Province as our new production base.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2015"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">ELCON-Fushida office</h3>
                            <h4 className="vertical-timeline-element-subtitle">Shenzhen, China</h4>
                            <p>
                                Setup ELCON-Fushida office in Qianhai Free Trade Zone
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        />
                    </VerticalTimeline>
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
                                 src={ Certificate }
                                 alt="Elcon Business Certificate"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default home;