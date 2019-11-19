import React, { Component } from 'react';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null
        };

        componentDidMount() {
            getData()
                .then( this.onListLoaded )
                .catch( this.onError )
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

        render() {

            const { data, loading, error } = this.state;

            const hasData = !( loading || error );

            const errorMessage = error ? <ErrorIndicator/> : null;
            const spinner = loading ? <Spinner/> : null;
            const items = hasData ? <View {...this.props} data={data} /> : null;


            return(
                <React.Fragment>
                    { errorMessage }
                    { spinner }
                    { items }
                </React.Fragment>
            )
        }
    }
};

export default withData;