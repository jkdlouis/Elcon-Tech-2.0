import React from 'react';
import './Banner.scss';

export const banner = (props) => {
    return (
      <div className={ `row text-center justify-content-center align-items-center banner ${props.backgroundImage}` }>
          <div className="col-12">
              <h1>{ props.title }</h1>
              <h4>{ props.subtitle }</h4>
          </div>
      </div>
    )
};

export default banner;
