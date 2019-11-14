import React, { Component } from "react";
import ErrorIndicator from "../errorIndicator/errorIndicator";


export default class ErrorBoundry extends Component {

    state = {
        errorIndicator: false
    };

    componentDidCatch() {
        this.setState( {
            errorIndicator: true
        })
    }



    render() {

        console.log(this.props.children);

        if ( this.state.errorIndicator) {
            return <ErrorIndicator/>
        }
        return this.props.children;
    }
}