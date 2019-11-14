import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ItemList from "../itemList/itemList";
import PeoplePage from "../peoplePage/peoplePage";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import PersonDetails from "../personDetails/personDetails";
import SwapiService from "../../services/swapiService";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        errorIndicator: false
    };

    componentDidCatch() {
        this.setState( {
            errorIndicator: true
        })
    }

    render() {

        if ( this.state.errorIndicator ) {
            return <ErrorIndicator/>
        }

        return(
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-md-9'>
                        <Header/>
                        <div className="row justify-content-between">
                            <div className="col-md-12">
                                <RandomPlanet />
                            </div>

                            <PeoplePage />


                            <div className="col-lg-4 col-md-12">
                                <ItemList
                                    onItemSelected={ this.onPersonSelected }
                                    getData={ this.swapiService.getAllPlanets }
                                    renderItem={ (item) => item.name }
                                />
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <PersonDetails personId={ this.state.selectedPerson  }/>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <ItemList
                                    onItemSelected={ this.onPersonSelected }
                                    getData={ this.swapiService.getAllStarships }
                                    renderItem={ (item) => item.name }
                                />
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <PersonDetails personId={ this.state.selectedPerson  }/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}