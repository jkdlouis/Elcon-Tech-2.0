import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    let routes = (
       <Switch>
         <Route path="/" exact component={ Home }/>
         <Redirect to="/" />
       </Switch>
    );

    return (
      <div className="App">
        <Header/>
          { routes }
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
