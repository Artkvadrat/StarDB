import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";

export default class App extends Component {

    render() {
        return(
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-md-9'>
                        <Header/>
                        <div className="row justify-content-between">
                            <div className="col-md-12">
                                <RandomPlanet />
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <ItemList />
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <PersonDetails />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}