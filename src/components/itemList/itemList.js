import React, { Component } from "react";
import './itemList.css';


import SwapiService from "../../services/swapiService";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component{

    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    renderItems(arr) {
        return arr.map( ( {id, name} ) => {
            return (
                <li className='list-group-item'
                    key={id}
                    onClick={ () => this.props.onItemSelected(id) }>
                    { name }
                </li>
            )
        });
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then( ( peopleList ) => {
                this.setState({
                    peopleList
                });
            });
    }

    render() {

        const { peopleList } = this.state;

        if ( !peopleList ) {
            return <Spinner />;
        }

        const items = this.renderItems( peopleList );

        return(
            <div className='itemList'>
                { items }
            </div>
        )
    }

}