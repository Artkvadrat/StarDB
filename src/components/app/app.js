import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";

export default class App extends Component {

    render() {
        return(
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-7'>
                        <Header/>
                        <RandomPlanet />

                        <ItemList />
                        <PersonDetails />
                    </div>
                </div>
            </div>
        )
    }
}