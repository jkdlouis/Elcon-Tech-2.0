import React, { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Spinner from '../Spinner/Spinner';
import 'react-vertical-timeline-component/style.min.css';
import './TImeline.scss';

const timeLine = (props) => {
        let timeLine = <Spinner/>;
        let verticalTimeLineElement = null;

        if (props.timeLineData && props.timeLineData.data.length) {
            timeLine = props.timeLineData.data.map((data, index) => {
                    index += 1;
                    verticalTimeLineElement = (
                        <VerticalTimelineElement
                            className={index % 2 === 0 ? 'vertical-timeline-element--education' : 'vertical-timeline-element--work odd'}
                            date={data.year}
                            position={index % 2 === 0 ? 'right' : 'left'}
                            iconStyle={index % 2 === 0 ?
                                { background: 'rgb(233, 30, 99)', color: '#fff' }
                                : { background: 'rgb(33, 150, 243)', color: '#fff' }
                            }>
                            <h3 className="vertical-timeline-element-title">{data.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{data.location}</h4>
                            <p>
                                {data.description}
                            </p>
                        </VerticalTimelineElement>
                    );

                    return (
                        <VerticalTimeline key={data.year}>
                            {verticalTimeLineElement}
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