import React, { Component } from 'react';
import './peoplePage.css';

import PersonDetails from "../personDetails/personDetails";
import ItemList from "../itemList/itemList";
import ErrorIndicator from "../errorIndicator/errorIndicator";

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 1,
        errorIndicator: false
    };

    componentDidCatch() {
        this.setState( {
            errorIndicator: true
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if ( this.state.errorIndicator ) {
            return <ErrorIndicator/>
        }

        return (
            <React.Fragment>
                <div className="col-lg-4 col-md-12">
                    <ItemList  onItemSelected={ this.onPersonSelected }/>
                </div>
                <div className="col-lg-8 col-md-12">
                    <PersonDetails personId={ this.state.selectedPerson  }/>
                </div>
            </React.Fragment>
        )
    }

}