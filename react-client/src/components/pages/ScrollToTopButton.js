import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';

class ScrollToTopButton extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTopHandler = this.scrollTopHandler.bind(this);
  }

  scrollTopHandler(e) {
    e.preventDefault();
    this.props.scrollToTop();
  }
  render() {
    return (
      <Container className="button-container">
        <Button icon className="button-next" onClick={this.scrollTopHandler}>
          <Icon name="chevron up" />
        </Button>
      </Container>
    );
  }
}

export default ScrollToTopButton;
