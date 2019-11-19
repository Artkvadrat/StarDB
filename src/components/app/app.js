import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";

import ItemList from "../itemList/itemList";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import SwapiService from "../../services/swapiService";
import ItemDetails, { Record } from "../itemDetails/itemDetails";
import Row from "../rowComponent/rowComponent";
import PeoplePage from "../peoplePage/peoplePage";

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

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;


        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={ getPerson }
                getImageUrl={getPersonImage}>

                <Record field='gender' label='Gender -'/>
                <Record field='birthYear' label='Birth year -'/>
                <Record field='eyeColor' label='Eye color -'/>

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={9}
                getData={ getStarship }
                getImageUrl={getStarshipImage}>

                <Record field='manufacturer' label='Manufacturer -'/>
                <Record field='model' label='Model -'/>
                <Record field='passengers' label='Passengers -'/>
                <Record field='crew' label='Crew -'/>
                <Record field='length' label='Length -'/>
                <Record field='costInCredits' label='Cost -'/>

            </ItemDetails>
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

                            <PeoplePage/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}