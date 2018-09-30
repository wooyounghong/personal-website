import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
// import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll';

class ScrollToNext extends React.Component {
  constructor() {
    super();

    this.nextClickHandler = this.nextClickHandler.bind(this);
  }
  nextClickHandler(event) {
    console.log(scroller, 'Scroll scroller');
    event.preventDefault();
    scroller.scrollTo(this.props.element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    console.log('clicked', this.props.element);
  }
  render() {
    return (
      <Container className="button-container">
        <Button icon className="button-next" onClick={this.nextClickHandler}>
          <Icon name="chevron down" />
        </Button>
      </Container>
    );
  }
}

export default ScrollToNext;
