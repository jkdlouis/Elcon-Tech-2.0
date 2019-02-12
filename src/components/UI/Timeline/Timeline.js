import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TImeline.scss';

const timeLine = (props) => {
    return (
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
   );
};

export default timeLine;