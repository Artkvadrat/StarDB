import React, { Component } from 'react';
import './peoplePage.css';
import ItemDetails from "../itemDetails/itemDetails";
import ItemList from "../itemList/itemList";
import ErrorBoundry from "../errorBoundry/errorBoundry";
import SwapiService from "../../services/swapiService";
import Row from "../rowComponent/rowComponent";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const itemList = (
            <ItemList
                onItemSelected={ this.onPersonSelected }
                getData={ this.swapiService.getAllPeople }
                renderItem={ ({ name, birthYear }) => `${name} (${birthYear})` }
            />
        );

        const personDetails = (
            <ItemDetails itemId={ this.state.selectedPerson  }/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }

}