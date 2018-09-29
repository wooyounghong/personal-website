import React from 'react';
import { Container } from 'semantic-ui-react';
import PortfolioItem from './PortfolioItem';
const PortfolioItemList = props => (
  <Container>
    Portfolio Item List start
    <PortfolioItem />
    PortfolioItemList end
  </Container>
);

export default PortfolioItemList;
