import React, { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Spinner from '../Spinner/Spinner';
import 'react-vertical-timeline-component/style.min.css';
import './TImeline.scss';

const timeLine = (props) => {
        let timeLine = <Spinner/>;
        let verticalTimelineElement = null;

        if (props.timeLineData && props.timeLineData.data.length) {
            timeLine = props.timeLineData.data.map((data, index) => {
                index += 1;
                if (index % 2 === 0) {
                    verticalTimelineElement = (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date={ data.year }
                            position="right"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">{ data.title }</h3>
                            <h4 className="vertical-timeline-element-subtitle">{ data.location }</h4>
                            <p>
                                { data.description }
                            </p>
                        </VerticalTimelineElement>
                    )
                } else {
                    verticalTimelineElement = (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work odd"
                            date={ data.year }
                            position="left"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">{ data.title }</h3>
                            <h4 className="vertical-timeline-element-subtitle">{ data.location }</h4>
                            <p>
                                { data.description }
                            </p>
                        </VerticalTimelineElement>
                    )
                }
                    return (
                        <VerticalTimeline key={ data.year }>
                            { verticalTimelineElement }
                        </VerticalTimeline>
                    )
                }
            );
        }

        return (
            <Fragment>
                {timeLine}
            </Fragment>
        )
    }
;

export default timeLine;