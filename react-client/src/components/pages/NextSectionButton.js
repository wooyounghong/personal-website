import React from 'react';
// import { Container } from 'semantic-ui-react';

class NextSectionButton extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'LandingPage',
    };
    this.onNextClick = this.onNextClick.bind(this);
  }
  onNextClick(event) {
    event.preventDefault();
    console.log('clicked');
  }
  render() {
    return (
      <div className="button-container">
        <button className="button-next" onClick={this.onNextClick}>
          Next Section!
        </button>
      </div>
    );
  }
}

export default NextSectionButton;
