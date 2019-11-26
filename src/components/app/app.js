import React, { Component } from 'react';
import './app.css';
//components importing
import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import PeoplePage from "../peoplePage/peoplePage";
import PlanetPage from "../planetPage/planetPage";
import StarshipPage from "../starshipPage/starshipPage";
//swapiService importing
import { SwapiServiceProvider } from "../swapiServiceContext/swapiServiceContext";
import SwapiService from "../../services/swapiService";
//router importing
import { BrowserRouter as Router, Route } from "react-router-dom";
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
                <Router>
                    <div className='container-fluid'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <Header/>
                                <div className="row justify-content-between">
                                    <div className="col-md-12">
                                        <RandomPlanet />
                                    </div>

                                    <Route path="/"
                                           render={ () => <h2>Welcome to StarDB</h2> }
                                           exact={true} />
                                    <Route path="/people" component={ PeoplePage } />
                                    <Route path="/planets" component={ PlanetPage } />
                                    <Route path="/starships" component={ StarshipPage } exact/>
                                    <Route path="/starships/:id"
                                           render={ ({ match }) => {
                                               const { id } = match.params;
                                               return <StarshipDetails itemId={id}/>
                                           }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </SwapiServiceProvider>

        )
    }
}
