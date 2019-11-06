import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/header';

export default class App extends Component {

    render() {
        return(
            <div className='container'>
                <Header/>
            </div>
        )
    }
}