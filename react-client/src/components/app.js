import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Element } from 'react-scroll';
import NavBar from './headerComponent/NavBar.js';
import ComponentContainer from './pages/ComponentContainer';
import LandingPage from './pages/LandingPage';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route name="home" exact path="/" component={ComponentContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
