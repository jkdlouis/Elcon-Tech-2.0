import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import ProductList from './components/Product/ProductList/ProductList';
import Facility from './components/Facility/Facility';
import Contact from './components/Contact/Contact';
import './index.scss';
import './App.scss';

const App = (props) => {
    let routes = (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/product" exact component={Product}/>
            <Route path="/product/:type" exact component={ProductList}/>
            <Route path="/product/all" exact component={ProductList}/>
            <Route path="/facility" exact component={Facility}/>
            <Route path="/contact" exact component={Contact}/>
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
};

export default withRouter(App);
