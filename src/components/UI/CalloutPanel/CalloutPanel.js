import React from 'react';
import { Link } from 'react-router-dom';
import './CalloutPanel.scss';

const callOutPanel = (props) => {
   return (
       <div className="text-box d-none d-md-block">
           <p className="mb-4">{ props.description }</p>
           <Link role="button" to={ props.link } className="btn-learn">
               { props.btnText }
           </Link>
       </div>
   )
};

export default callOutPanel;