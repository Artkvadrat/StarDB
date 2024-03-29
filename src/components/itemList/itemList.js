import React from "react";
import './itemList.css';
import PropTypes from 'prop-types';

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

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf( PropTypes.object ).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;