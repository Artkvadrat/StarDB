import React, { Component } from 'react';
import './peoplePage.css';
import ItemDetails, {Record} from "../itemDetails/itemDetails";
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

        const { getPerson, getPersonImage, getAllPeople } = this.swapiService;

        const itemList = (
            <ItemList
                onItemSelected={ this.onPersonSelected }
                getData={ getAllPeople }
                renderItem={ ({ name, birthYear }) => `${name} (${birthYear})` }
            />
        );

        const personDetails = (
            <ItemDetails
                itemId={ this.state.selectedPerson  }
                getData={ getPerson }
                getImageUrl={ getPersonImage }>

                <Record field='gender' label='Gender -'/>
                <Record field='birthYear' label='Birth year -'/>
                <Record field='eyeColor' label='Eye color -'/>

            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }

}