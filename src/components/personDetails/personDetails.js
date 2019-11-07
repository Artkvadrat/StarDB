import React, { Component } from 'react';
import './personDetails.css';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className='personDetails d-flex'>
                <div>
                    <img className="personImage"
                         src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                         alt="R2-D2"/>
                </div>

                <div className='personList'>
                    <h3>R2-D2</h3>

                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <span className='term'>Gender</span>
                            <span>male</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Eye Color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}