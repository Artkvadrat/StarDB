import React from 'react';
import './errorIndicator.css';
import errorImage from './error-404.png';

const  ErrorIndicator = () => {

    return (
        <div className='errorIndicator'>
            <img src={errorImage} alt="Error"/>
            <span className='boom'><br/>Boom!<br/></span>
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
