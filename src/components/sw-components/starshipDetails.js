import React from 'react';

import ItemDetails, { Record } from "../itemDetails/itemDetails";
import { withSwapiService } from "../hocHelper/withSwapiService";

const StarshipDetails = ({ itemId, swapiService }) => {

    const { getStarship, getStarshipImage } = swapiService;

    return (
       <ItemDetails
           itemId={itemId}
           getData={ getStarship }
           getImageUrl={ getStarshipImage }>

            <Record field='manufacturer' label='Manufacturer -'/>
            <Record field='model' label='Model -'/>
            <Record field='passengers' label='Passengers -'/>
            <Record field='crew' label='Crew -'/>
            <Record field='length' label='Length -'/>
            <Record field='costInCredits' label='Cost -'/>
       </ItemDetails>
    )
};

export default withSwapiService(StarshipDetails);