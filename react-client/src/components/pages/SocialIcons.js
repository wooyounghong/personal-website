import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Container } from 'semantic-ui-react';
class SocialIcons extends Component {
  render() {
    return (
      <Container className="social-icons center">
        <SocialIcon
          url="https://www.linkedin.com/in/wayne-wooyoung-hong/"
          network="linkedin"
          className="social-icon-logo"
        />
        <SocialIcon
          url="https://github.com/wooyounghong"
          network="github"
          color="black"
          className="social-icon-logo"
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=605924668"
          network="facebook"
          className="social-icon-logo"
        />
        <a
          href="mailto:hongwy1128@gmail.com"
          data-rel="external"
          className="email-address"
        >
          hongwy1128@gmail.com
        </a>
      </Container>
    );
  }
}

export default SocialIcons;
