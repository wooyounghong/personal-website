import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import PortfolioItemList from './PortfolioItemList';
import ScrollToNext from './ScrollToNext';

class PortfolioContainer extends React.Component {
  render() {
    return (
      <Container className="body-container">
        <Container className="homepage-intro center">Portfolio</Container>
        <div>**** INSERT LOGOS HERE!****</div>
        <PortfolioItemList />
        <ScrollToNext element={'Contact'} />
      </Container>
    );
  }
}

export default PortfolioContainer;
