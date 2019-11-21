import React from 'react';
import './header.css';

const Header = () => {

    return (
        <div className='header d-flex justify-content-center'>
            <h2>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="">
                    Star DB
                </a>
            </h2>
            <ul>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">
                        People
                    </a>
                </li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">
                        Planets
                    </a>
                </li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">
                        Starships
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Header;