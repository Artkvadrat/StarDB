import React, { Component } from 'react';
import './itemDetails.css';
import ErrorIndicator from "../errorIndicator/errorIndicator";
import Spinner from "../spinner/spinner";


const Record = ({ item, field, label }) => {
    return (
        <li className='list-group-item'>
            <span className='term'>{label}</span>
            <span>{ item[field] }</span>
        </li>
    )
};
export { Record };


export default class ItemDetails extends Component {

    state = {
        item: {},
        loading: true,
        error: false,
        image: null
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

        const { getImageUrl } = this.props;

        this.setState({
            item,
            loading: false,
            image: getImageUrl(item)
        })
    };


    updateItem = (  ) => {

        const { itemId, getData } = this.props;

        console.log('ID' + itemId);
        console.log('fun' + getData);


        getData( itemId )
            .then( this.onItemLoaded )
            .catch( this.onError )
    };

    render() {


        const { item, loading, error, image } = this.state;

        const hasData = !( loading || error );

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const personView = hasData ? <PersonView item={ item } img={ image } props={this.props}/> : null;

        return (
            <div className='personDetails d-flex justify-content-center'>
                { errorMessage }
                { spinner }
                { personView }
            </div>
        )
    }
}

const PersonView = ( { item, img, props } ) => {

    const { name } = item;

    return (
        <React.Fragment>
            <div>
                    <img className="personImage"
                         src={ img }
                         alt={ name }/>
                </div>

                <div className='personList'>
                    <h3>{ name }</h3>

                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map( props.children, ( child, idx ) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
        </React.Fragment>
    )
};