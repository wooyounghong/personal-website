import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SocialIcons from './SocialIcons.js';
import NextSectionButton from './NextSectionButton.js';
class LandingPage extends Component {
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
        <NextSectionButton element={'About'} />
      </Container>
    );
  }
}

export default LandingPage;
