import React, { Component } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from "../randomPlanet/randonPlanet";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";
import ErrorIndicator from "../errorIndicator/errorIndicator";

export default class App extends Component {

    state = {
        selectedPerson: 1,
        errorIndicator: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
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
                            <div className="col-lg-4 col-md-12">
                                <ItemList  onItemSelected={ this.onPersonSelected }/>
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