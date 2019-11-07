import React, { Component } from 'react';
import './randomPlanet.css';

import SwapiService from "../../services/swapiService";
import Spinner from "../spinner/spinner";


export default class RandomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = ( planet ) => {
        this.setState({ planet } )
    };

    updatePlanet() {
        let id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then( this.onPlanetLoaded )
    }

    render() {

        const { planet: { id, population, rotationPeriod, diameter, name } } = this.state;

        return (
            <div className='randomPlanet d-flex justify-content-center'>
                {/*<div className='spinner'>*/}
                {/*    <Spinner/>*/}
                {/*</div>*/}
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