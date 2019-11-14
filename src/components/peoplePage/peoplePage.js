import React, { Component } from 'react';
import './peoplePage.css';

import PersonDetails from "../personDetails/personDetails";
import ItemList from "../itemList/itemList";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import SwapiService from "../../services/swapiService";
import Row from "../rowComponent/rowComponent";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

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

        const itemList = (
            <ItemList
                onItemSelected={ this.onPersonSelected }
                getData={ this.swapiService.getAllPeople }
                renderItem={ ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }
            />
        );

        const personDetails = (
            <PersonDetails personId={ this.state.selectedPerson  }/>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        )
    }

}