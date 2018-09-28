import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SocialIcons from './SocialIcons.js';
class HomePage extends Component {
  render() {
    return (
      <Container className="homepage-container">
        <Container className="center">
          <Container className="homepage-intro">Hey! I'm Wayne!</Container>
          <Container className="homepage-description">
            Full Stack Dev | Software Engineer | Marketer | Animal Lover
          </Container>
          <SocialIcons />
        </Container>
      </Container>
    );
  }
}

export default HomePage;
