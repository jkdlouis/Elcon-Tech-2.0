import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './containers/Product/Product';
import Facility from './components/Facility/Facility';
import Contact from './containers/Contact/Contact';
import './App.scss';

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/product" exact component={ Product }/>
                <Route path="/facility" exact component={ Facility }/>
                <Route path="/contact" exact component={ Contact }/>
                <Redirect to="/"/>
            </Switch>
        );

        return (
            <div className="App">
                <div className="container-fluid">
                    <Header/>
                    <main>
                        {routes}
                    </main>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
