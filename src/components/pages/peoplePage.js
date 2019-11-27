import React from 'react';
import './peoplePage.css';

import ErrorBoundry from "../errorBoundry/errorBoundry";
import Row from "../rowComponent/rowComponent";
import { PersonList } from '../sw-components/itemLists'
import PersonDetails from "../sw-components/personDetails";
import { withRouter } from 'react-router-dom';


const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    const itemList = <PersonList onItemSelected={ ( id ) => history.push(id) } />;

    const personDetails = (
        <PersonDetails itemId={ id }/>
    );

    if (!id) {
        return (
            <ErrorBoundry>
                <Row left={itemList} right={<p className="selectText">Select Item</p>}/>
            </ErrorBoundry>
        )
    }

    return (
        <ErrorBoundry>
            <Row left={itemList} right={personDetails}/>
        </ErrorBoundry>
    )

};

export default withRouter(PeoplePage);
