import React from 'react';

import ErrorBoundry from "../errorBoundry/errorBoundry";
import { StarshipList } from '../sw-components/itemLists';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => {

        return (
            <ErrorBoundry>
                <StarshipList onItemSelected={ ( id ) => history.push( id ) } />
            </ErrorBoundry>
        )
};

export default withRouter(StarshipPage);
