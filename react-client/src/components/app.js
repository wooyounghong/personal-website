import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NavBar from './headerComponent/NavBar.js';
import Footer from './footerComponent/Footer.js';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="projects" exact path="/projects" component={Projects} />
          <Route name="about" exact path="/about" component={About} />
          <Route name="contact" exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
