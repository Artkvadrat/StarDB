import React, { Component } from 'react';
import './itemDetails.css';
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import Spinner from "../spinner/spinner";

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) { // we use it if something will change during execution
        if ( this.props.itemId !== prevProps.itemId ) { // if use in componentDidUpdate a setState, we should
                                                            // use a if statement
            this.setState({
                loading: true
            });
            this.updateItem();
        }
    }

    onError = ( err ) => {
        this.setState( {
            error: true,
            loading: false
        });
    };

    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    };


    updateItem = (  ) => {

        const { itemId, getData } = this.props;

        getData( itemId )
            .then( this.onItemLoaded )
            .catch( this.onError )
    };

    render() {


        const { item, loading, error } = this.state;

        const hasData = !( loading || error );

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const personView = hasData ? <PersonView person={ item }/> : null;

        return (
            <div className='personDetails d-flex justify-content-center'>
                { errorMessage }
                { spinner }
                { personView }
            </div>
        )
    }
}

const PersonView = ( {person: item} ) => {

    const { id, name, gender, birthYear, eyeColor } = item;

    return (
        <React.Fragment>
            <div>
                    <img className="personImage"
                         src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                         alt={ name }/>
                </div>

                <div className='personList'>
                    <h3> { name }</h3>

                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <span className='term'>Gender</span>
                            <span>{ gender }</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Birth Year</span>
                            <span>{ birthYear }</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Eye Color</span>
                            <span>{ eyeColor }</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
};