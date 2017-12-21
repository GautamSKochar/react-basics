import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes.js';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <hr />
                        <Routes />
                    </div>
                </Router>
            </div>
        );
    }
}