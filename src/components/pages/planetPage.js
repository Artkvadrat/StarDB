import React, { Component } from 'react';

import ErrorBoundry from "../errorBoundry/errorBoundry";
import Row from "../rowComponent/rowComponent";
import { PlanetList } from '../sw-components/itemLists'
import PlanetDetails from "../sw-components/planetDetails";


export default class PlanetPage extends Component {

    state = {
        selectedPlanet: 2
    };

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    };

    render() {

        const itemList = <PlanetList onItemSelected={ this.onPlanetSelected } />;

        const personDetails = (
            <PlanetDetails itemId={this.state.selectedPlanet}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }

}
