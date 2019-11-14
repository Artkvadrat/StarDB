import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";

import PeoplePage from "../peoplePage/peoplePage";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import SwapiService from "../../services/swapiService";
import ItemDetails from "../itemDetails/itemDetails";
import Row from "../rowComponent/rowComponent";

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

        const { getPerson, getStarship } = this.swapiService;


        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={ getPerson }
            />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={1}
                getData={ getStarship }
            />
        );


        return(
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-md-9'>
                        <Header/>
                        <div className="row justify-content-between">
                            <div className="col-md-12">
                                <RandomPlanet />
                            </div>

                            <Row
                                left={personDetails}
                                right={starshipDetails}
                            />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}