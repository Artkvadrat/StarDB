import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header d-flex justify-content-center'>
            <h2>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to="/">
                    Star DB
                </Link>
            </h2>
            <ul>
                <li>
                    <Link to="/people"> People </Link>
                </li>
                <li>
                     <Link to='/planets'> Planets </Link>
                </li>
                <li>
                    <Link to='/starships'> Starships </Link>
                </li>
            </ul>
        </div>
    )
};

export default Header;