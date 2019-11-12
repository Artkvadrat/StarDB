import React, { Component } from "react";
import './itemList.css';


import SwapiService from "../../services/swapiService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

export default class ItemList extends Component{

    swapiService = new SwapiService();

    state = {
        peopleList: null,
        loading: true,
        error: false
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

    onError = ( err ) => {
        this.setState( {
            error: true,
            loading: false
        });
    };

    onListLoaded = ( peopleList ) => {
        this.setState({
            peopleList,
            loading: false
        });
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then( this.onListLoaded )
            .catch( this.onError )
    }

    render() {

        const { peopleList, loading, error } = this.state;

        const hasData = !( loading || error );

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const items = hasData ? this.renderItems( peopleList ) : null;


        return(
            <div className='itemList justify-content-center'>
                { errorMessage }
                { spinner }
                { items }
            </div>
        )
    }

}