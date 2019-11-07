import React, { Component } from 'react';
import './randomPlanet.css';

import SwapiService from "../../services/swapiService";


export default class RandomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        let id = setInterval( () => {
            id = Math.floor(Math.random()*25) + 2;
        }, 15000);
        this.swapiService
            .getPlanet(id)
            .then( ( planet ) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                });
            });
    }

    render() {

        const { id, population, rotationPeriod, diameter, name } = this.state;

        return (
            <div className='randomPlanet d-flex'>
                <div>
                    <img className="planetImage"
                         src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt="Random Planet"/>
                </div>

                <div className='planetList'>
                    <h3>{name}</h3>

                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <span className='term'>Population</span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}