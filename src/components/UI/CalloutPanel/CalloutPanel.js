import React from 'react';
import Button from '../Button/Button';
import './CalloutPanel.scss';

const callOutPanel = (props) => {
   return (
       <div className="text-box d-none d-md-block">
           <p className="mb-4">{ props.description }</p>
           <Button btnText={ props.btnText }
                   link={ props.link }
                   btnClass={ props.btnClass }
           />
       </div>
   )
};

export default callOutPanel;