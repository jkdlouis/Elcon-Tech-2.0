import React from 'react';
import { Link } from 'react-router-dom';
import PageNoFound from '../../assets/images/backgrounds/404-permalink.png';

const notFound = () => (
    <div className="row text-center">
        <div className="col-12">
            <img src={ PageNoFound } style={{width: '100%', height: '100%', display: 'block', margin: 'auto', position: 'relative' }}/>
            <Link to="/"><strong className="fs-26 main-green position-relative" style={{ top: '-100px' }}>Return to Home Page</strong></Link>
        </div>
    </div>
);

export default notFound;