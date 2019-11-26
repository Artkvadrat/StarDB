import React, { Component } from 'react';
import './starshipPage.css';

import ErrorBoundry from "../errorBoundry/errorBoundry";
import Row from "../rowComponent/rowComponent";
import { StarshipList } from '../sw-components/itemLists'
import StarshipDetails from "../sw-components/starshipDetails";


export default class StarshipPage extends Component {

    state = {
        selectedShip: 9
    };

    onStarshiplected = (id) => {
        this.setState({
            selectedShip: id
        });
    };

    render() {

        const itemList = <StarshipList onItemSelected={ this.onStarshiplected } />;

        const personDetails = (
            <StarshipDetails itemId={this.state.selectedShip}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }

}
