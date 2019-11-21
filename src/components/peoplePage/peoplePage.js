import React, { Component } from 'react';
import './peoplePage.css';

import ErrorBoundry from "../errorBoundry/errorBoundry";
import Row from "../rowComponent/rowComponent";
import { PersonList } from '../sw-components/itemLists'
import PersonDetails from "../sw-components/personDetails";


export default class PeoplePage extends Component {

    state = {
        selectedPerson: 1
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const itemList = <PersonList onItemSelected={ this.onPersonSelected } />;

        const personDetails = (
            <PersonDetails itemId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }

}
