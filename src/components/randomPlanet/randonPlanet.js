import React, { Component } from 'react';
import './randomPlanet.css';

import SwapiService from "../../services/swapiService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";


export default class RandomPlanet extends Component{

    static defaultProps = {
        updateInterval: 30000
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval( this.updatePlanet, updateInterval );
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.log(errorInfo);
        return (
            <ErrorIndicator/>
        )
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

    updatePlanet = () => {
        let id =  Math.floor(Math.random()*50) + 2;
        this.swapiService
            .getPlanet(id)
            .then( this.onPlanetLoaded )
            .catch( this.onError );
    };

    render() {

        const { planet, loading } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const planetView = planet ? <PlanetView planet={planet}/> : null;

        return (
            <div className='randomPlanet d-flex justify-content-center'>
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