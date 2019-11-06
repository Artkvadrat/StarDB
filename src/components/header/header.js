import React from 'react';
import './header.css';

const Header = () => {

    return (
        <div className='d-flex justify-content-between'>
            <h1>Star DB</h1>
            <ul>
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    )
};

export default Header;