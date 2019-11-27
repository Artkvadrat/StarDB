import React, { Component } from 'react';
import './app.css';
//components importing
import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import PeoplePage from "../pages/peoplePage";
import PlanetPage from "../pages/planetPage";
import StarshipPage from "../pages/starshipPage";
import SecretPage from "../pages/secretPage";
import LoginPage from "../pages/loginPage";
//swapiService importing
import { SwapiServiceProvider } from "../swapiServiceContext/swapiServiceContext";
import SwapiService from "../../services/swapiService";
//router importing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StarshipDetails from "../sw-components/starshipDetails";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    componentDidCatch() {
        return (
            <ErrorIndicator/>
        )
    }

    render() {

        const { isLoggedIn } = this.state;

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

                                    <Switch>
                                        <Route path="/"
                                               render={ () => <h2>Welcome to StarDB</h2> }
                                               exact={true} />
                                        <Route path="/people/:id?" component={ PeoplePage } />
                                        <Route path="/planets" component={ PlanetPage } />
                                        <Route path="/starships" component={ StarshipPage } exact/>
                                        <Route path="/starships/:id"
                                               render={ ({ match }) => {
                                                   const { id } = match.params;
                                                   return <StarshipDetails itemId={id}/>
                                               }} />
                                        <Route path="/login"
                                                render={ () => (
                                                   <LoginPage
                                                   isLoggedIn={isLoggedIn}
                                                   onLogin={ this.onLogin }/>
                                                )}
                                        />
                                        <Route path="/secret"
                                                render={ () => (
                                                    <SecretPage
                                                    isLoggedIn={isLoggedIn}/>
                                                )}/>

                                        <Route component={ErrorIndicator}/>
                                    </Switch>

                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </SwapiServiceProvider>

        )
    }
}
