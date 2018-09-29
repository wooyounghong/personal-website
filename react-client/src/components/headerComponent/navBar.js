import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-scroll';

class NavBar extends Component {
  constructor() {
    super();
    this.state = { isSticky: false };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <nav>
        <div className="menu">
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            className="menu-item about-scroll"
          >
            About
          </Link>
          <Link
            to="Portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="menu-item portfolio-scroll"
          >
            Portfolio
          </Link>
          <Link
            to="LandingPage"
            spy={true}
            smooth={true}
            duration={500}
            className="menu-item contact-scroll"
          >
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
