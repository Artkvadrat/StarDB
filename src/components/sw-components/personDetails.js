import React from 'react';

import ItemDetails, { Record } from "../itemDetails/itemDetails";
import { withSwapiService } from "../hocHelper/withSwapiService";

const PersonDetails = ({ itemId, swapiService }) => {

    const { getPerson, getPersonImage } = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={ getPerson }
            getImageUrl={ getPersonImage }>

            <Record field='gender' label='Gender -'/>
            <Record field='birthYear' label='Birth year -'/>
            <Record field='eyeColor' label='Eye color -'/>
        </ItemDetails>
    )

};

export default withSwapiService(PersonDetails);