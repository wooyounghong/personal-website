import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Container } from 'semantic-ui-react';
class Footer extends Component {
  render() {
    return (
      <Container className="container-footer">
        <Container className="container-footer-info">
          &copy; Wayne Wooyoung Hong
          <SocialIcon
            url="https://www.linkedin.com/in/wayne-wooyoung-hong/"
            network="linkedin"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/wooyounghong"
            network="github"
            style={{ height: 35, width: 35 }}
            color="black"
          />
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=605924668"
            network="facebook"
            style={{ height: 35, width: 35 }}
          />
          <a
            href="mailto:hongwy1128@gmail.com"
            data-rel="external"
            className=".footer-email"
          >
            hongwy1128@gmail.com
          </a>
        </Container>
      </Container>
    );
  }
}

export default Footer;
