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
      <Grid columns="two" divided>
        <Grid.Row>
          {portfolioData &&
            portfolioData.map(portfolioItem => (
              <Grid.Column className="portfolio-item-box">
                <Container>
                  <b>{portfolioItem.title}</b>
                </Container>
                <Container style={{ fontSize: '14px' }}>
                  {portfolioItem.description}
                </Container>
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
