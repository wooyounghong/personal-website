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
          name="home"
          as={Link}
          to="/home"
          active={activeItem === 'home'}
        />

        {/* <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleClick}
        /> */}
        <Menu.Item
          name="projects"
          active={activeItem === 'projects'}
          onClick={this.handleClick}
        />
        <Menu.Item
          name="about"
          active={activeItem === 'about'}
          onClick={this.handleClick}
        />
      </Menu>
    );
  }
}

export default NavBar;
