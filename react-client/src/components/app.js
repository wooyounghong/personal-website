import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Element } from 'react-scroll';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import NavBar from './headerComponent/NavBar.js';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* <Route name="home" exact path="/" component={LandingPage} /> */}
          {/* <Route name="projects" exact path="/projects" component={Projects} />
          <Route name="about" exact path="/about" component={About} />
          <Route name="contact" exact path="/contact" component={Contact} /> */}
          <Element name="LandingPage" className="landing-page-element">
            <LandingPage />
          </Element>
          <Element name="About" className="about-element">
            <About />
          </Element>
          <Element name="Portfolio" className="portfolio-element">
            <Portfolio />
          </Element>
          <Element name="LandingPage" className="landing-page-element">
            <Contact />
          </Element>
        </div>
      </Router>
    );
  }
}

export default App;
