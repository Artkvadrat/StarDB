import React, { Component } from 'react';
import './randomPlanet.css';

import SwapiService from "../../services/swapiService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";


export default class RandomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval( this.updatePlanet, 15000 );
    }

    componentWillUnmount() {  // to clean up a functions like "setInterval";
        clearInterval( this.interval );
    }

    onPlanetLoaded = ( planet ) => {
        this.setState({
            planet,
            loading: false
        } )
    };

    onError = ( err ) => {
        this.setState( {
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        let id =  Math.floor(Math.random()*50) + 2;
        this.swapiService
            .getPlanet(id)
            .then( this.onPlanetLoaded )
            .catch( this.onError );
    };

    render() {

        const { planet, loading, error } = this.state;

        const hasData = !( loading || error );

        const errorMessage = error ? <ErrorIndicator/> : null;   // catcher of error and a spinner
        const spinner = loading ? <Spinner/> : null;
        const planetView = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className='randomPlanet d-flex justify-content-center'>
                { errorMessage }
                { spinner }
                { planetView }
            </div>
        )
    }
}


const PlanetView = ( { planet } ) => {

    const {  id, population, rotationPeriod, diameter, name } = planet;

    return (
        <React.Fragment>
            <div>
                    <img className="planetImage"
                         src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt={name}/>
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
        </React.Fragment>
    )
};