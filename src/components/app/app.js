import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import PeoplePage from "../peoplePage/peoplePage";
import { SwapiServiceProvider } from "../swapiServiceContext/swapiServiceContext";
import SwapiService from "../../services/swapiService";
import PlanetDetails from "../sw-components/planetDetails";
import StarshipDetails from "../sw-components/starshipDetails";

export default class App extends Component {

    swapiService = new SwapiService();


    componentDidCatch() {
        return (
            <ErrorIndicator/>
        )
    }

    render() {

        return(
            <SwapiServiceProvider value={ this.swapiService }>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-md-9'>
                            <Header/>
                            <div className="row justify-content-between">
                                <div className="col-md-12">
                                    <RandomPlanet />
                                </div>

                                <PeoplePage/>

                            </div>
                        </div>
                    </div>
                </div>
            </SwapiServiceProvider>

        )
    }
}
