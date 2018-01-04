import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import Home from '../components/Home.js';
import About from '../components/About';
import User from '../components/User';
import Board from '../components/Board';
import Contact from '../components/Contact';
import FilterDetails from '../components/FilterDetails';
import createBrowserHistory from 'history/createBrowserHistory';
import $ from 'jquery';

const history = createBrowserHistory();

class Routes extends React.Component {
    constructor(props) {
        super();
        // console.log(props.userName);
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Home age="25" />} />
                <Route path="/about" render={() =>
                    <About promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
                        history={history} />} />
                <Route path="/user/:id" component={User} history={history} {...name = "Gautam"} />
                {/* <Route path="/user/:id" render={() => <User history={history} name="Gautam"/>} /> */}
                <Route path="/features" render={() => <Board />} />
                <Route path="/contact" component={Contact} />
                <Route path="/products" component={FilterDetails} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        );
    }
}

export default Routes;