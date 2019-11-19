import React, { Component } from "react";
import './itemList.css';

import ErrorIndicator from "../errorIndicator/errorIndicator";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component{

    state = {
        itemList: null,
        loading: true,
        error: false
    };

    renderItems(arr) {
        return arr.map( (item) => {

            const { id } = item;
            const label = this.props.renderItem(item);

            return (
                <li className='list-group-item'
                    key={id}
                    onClick={ () => this.props.onItemSelected(id) }>
                    { label }
                </li>
            )
        });
    }

    componentDidCatch(error, errorInfo) {
        console.error( errorInfo);
    }

    onError = ( err ) => {
        this.setState( {
            error: true,
            loading: false
        });
    };

    onListLoaded = ( itemList ) => {
        this.setState({
            itemList,
            loading: false
        });
    };

    componentDidMount() {

        const { getData } = this.props;

        getData()
            .then( this.onListLoaded )
            .catch( this.onError )
    }

    render() {

        const { itemList, loading, error } = this.state;

        const hasData = !( loading || error );

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const items = hasData ? this.renderItems( itemList ) : null;


        return(
            <div className='itemList justify-content-center'>
                { errorMessage }
                { spinner }
                { items }
            </div>
        )
    }

}