import React, { Component } from "react";
import './itemList.css';

import SwapiService from "../../services/swapiService";
import { withData } from '../hocHelper/withData';

const ItemList = ( props ) => {

        const { data, onItemSelected, children: renderLabel } = props;

        const items = data.map( (item) => {

            const { id } = item;
            const label = renderLabel(item);

            return (
                <li className='list-group-item'
                    key={id}
                    onClick={ () => onItemSelected(id) }>
                    { label }
                </li>
            )
        });

    return(
        <div className='itemList justify-content-center'>
            { items }
        </div>
    );

};



const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);