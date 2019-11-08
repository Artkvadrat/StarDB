import React from 'react';
import './errorIndicator.css';

const  ErrorIndicator = () => {

    return (
        <div className='errorIndicator'>
            <span className='boom'>Boom!<br/></span>
            <span>
                Something was going wrong!<br/>
            </span>
            <span>
                We try to fix it.
            </span>
        </div>
    )
};

export default ErrorIndicator;