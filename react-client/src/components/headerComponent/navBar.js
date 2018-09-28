import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

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
          <Link to="/about" className="menu-item">
            About
          </Link>
          <Link to="/portfolio" className="menu-item">
            Portfolio
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
