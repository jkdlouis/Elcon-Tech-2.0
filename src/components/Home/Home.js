import React from 'react';
import Certificate from '../../assets/images/backgrounds/certificates.jpg';
import './Home.scss';

const home = (props) => {
    return (
        <div className="home">
            <div className="row">
                {/*carousel section*/}
            </div>
            <div className="about">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center title-line">
                            <span>About US</span>
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

            <div className="row history d-none d-md-block">
                <div className="col-12">
                    <h2 className="text-center title-line">
                        <span>History</span>
                    </h2>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className='timeline'>
                                <li className='event up'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Established Aijiang Industrial Co., Ltd .
                                                Founded Lingda Electronics Co., Ltd. in Yangzhou.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className='date'>1990</div>
                                </li>
                                <li className='event down'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>
                                                Founded Aigao Electronics Co. Ltd in Nanjing.
                                                Established the Meijiang Electronics Co. Ltd. in Dongguan Huang
                                                Jiang.(Passed
                                                certification of THOMSO from France）
                                            </p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className='date'>1994</div>
                                </li>
                                <li className='event up'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Cooperated with SHOEI and supply OEM service for SHOEI, mainly for
                                                Japanese
                                                customers.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className='date'>1995</div>
                                </li>
                                <li className='event down'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Cooperated with several Japan cooperation with OEM service, including
                                                SOSHIN,
                                                TOSHIN, SHOEI, NIC and so on.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className="date">1996</div>
                                </li>
                                <li className='event up'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>The establishment of the Shenzhen Aijiang Electronics Co. Ltd.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className="date">1998</div>
                                </li>
                                <li className='event down'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Established Dongguan Ai Jiang Electronics Factory.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className="date">2000</div>
                                </li>
                                <li className='event up'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Established Dongguan Li Jiang factory.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className="date">2002</div>
                                </li>
                                <li className='event down'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Begin the Research and production of Polymer aluminum electric
                                                capacitors.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className="date">2004</div>
                                </li>
                                <li className='event up'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Completed the resources integration and founded Shaoguan Fushida
                                                Electronic
                                                Technology Co. Ltd. in Guangdon Province as our new production base.</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className="date">2014</div>
                                </li>
                                <li className='event down'>
                                    <div className='content'>
                                        <div className="avatar">
                                            <p>Setup ELCON-Fushida office in Qianhai Free Trade Zone</p>
                                        </div>
                                    </div>
                                    <div className="dot">
                                        <span className='circle'></span>
                                    </div>
                                    <div className="date">2015</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certificate">
                <div className="row text-center">
                    <div className="col-12 d-fex justify-content-center align-items-center">
                        <h3 className="title-line">
                            <span>Certificates</span>
                        </h3>
                        <h4>We Are a Certified Supplier Of Aluminum Electrolytic Capacitors</h4>
                            <img className="img-responsive"
                                 src={ Certificate }
                                 alt="Elcon Business Certificate"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default home;