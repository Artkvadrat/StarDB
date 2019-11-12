import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ItemList from "../itemList/itemList";
import PeoplePage from "../peoplePage/peoplePage";
import ErrorIndicator from "../errorIndicator/errorIndicator";

export default class App extends Component {

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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}