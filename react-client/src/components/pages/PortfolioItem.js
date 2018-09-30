import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import portfolioData from '../../../../data/data';

class PortfolioItem extends React.Component {
  constructor() {
    super();
    this.state = portfolioData;
  }
  componentDidMount() {}
  render() {
    const { portfolioData } = this.state;
    return (
      <Grid columns="three" divided>
        <Grid.Row className="portfolio-item-box">
          {portfolioData &&
            portfolioData.map(portfolioItem => (
              <Grid.Column>
                <Container>{portfolioItem.title}</Container>
                <Container>{portfolioItem.description}</Container>
                <Container>
                  {portfolioItem.icons.map(icon => (
                    <Icon name={icon} />
                  ))}
                </Container>
                <Container>
                  {portfolioItem.links.map(link => (
                    <a href={link.url} target="_blank">
                      <Icon name={link.icon} />
                    </a>
                  ))}
                </Container>
              </Grid.Column>
            ))}
        </Grid.Row>
      </Grid>
    );
  }
}

export default PortfolioItem;
