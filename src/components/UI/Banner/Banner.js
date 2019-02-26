import React from 'react';
import TextyAnim from 'rc-texty';
import './Banner.scss';

export const banner = (props) => {
    let h1Title = props.title;

    if (props.backgroundImage === 'facility-banner') {
        h1Title =  (<TextyAnim
            type="mask-top"
            duration={(e) => {
                if (e.index === 2) {
                    return 500;
                }
                return 1000;
            }}
            interval={(e) => {
                if (e.index === 2) {
                    return 500;
                }
                return e.index * 50;
            }}
            onEnd={(type) => {}}
        >
            { `Welcome to Elcon Facility Galleries` }
        </TextyAnim>)
    }

    return (
      <div className={ `row text-center justify-content-center align-items-center banner ${props.backgroundImage}` }>
          <div className="col-12">
              <h1>{ h1Title }</h1>
              <h4>{ props.subtitle }</h4>
          </div>
      </div>
    )
};

export default banner;
