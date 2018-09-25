import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

class NavBar extends Component {
  constructor() {
    super();
    this.state = { activeItem: 'home' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, { name }) {
    e.preventDefault();
    this.setState(
      {
        activeItem: name,
      },
      () => {
        console.log('Menu pressed', name, this.props);
      }
    );
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu secondary>
        <Menu.Item
          id="here"
          name="home"
          as={Link}
          to="/"
          active={activeItem === 'home'}
        />
        <Menu.Item
          name="projects"
          as={Link}
          to="/projects"
          active={activeItem === 'projects'}
        />
        <Menu.Item
          name="about"
          as={Link}
          to="/about"
          active={activeItem === 'about'}
        />
        <Menu.Item
          name="contact"
          as={Link}
          to="/contact"
          active={activeItem === 'contact'}
        />
      </Menu>
    );
  }
}

export default NavBar;
