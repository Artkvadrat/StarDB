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
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.log(errorInfo);
        return (
            <ErrorIndicator/>
        )
    }

    componentDidUpdate(prevProps) { // we use it if something will change during execution
        if ( this.props.itemId !== prevProps.itemId ) { // if use in componentDidUpdate a setState, we should
                                                            // use a if statement
            this.setState({
                item: {},
                image: null,
                loading: true
            });
            this.updateItem();
        }
    }

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

        getData( itemId )
            .then( this.onItemLoaded )
    };

    render() {


        const { item, loading, image } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const personView = image ? <DetailedView item={ item } img={ image } props={this.props}/> : null;

        return (
            <div className='personDetails d-flex justify-content-center'>
                { spinner }
                { personView }
            </div>
        )
    }
}

const DetailedView = ( { item, img, props } ) => {

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