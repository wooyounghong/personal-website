import React from 'react';
import { Container } from 'semantic-ui-react';
import { Element, animateScroll as scroll } from 'react-scroll';
import LandingPage from './LandingPage';
import About from './About';
import PortfolioContainer from './PortfolioContainer';
import Contact from './Contact';
import NextSectionButton from './NextSectionButton';
import ScrollToTopButton from './ScrollToTopButton';
class ComponentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    // console.log(scroll);
    this.scrollToTop();
    // window.scrollTo(0, 0);
  }

  // scrollToTop function;
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <Container>
        <Element name="LandingPage" className="landing-page-element">
          <LandingPage />
          {/* <NextSectionButton /> */}
        </Element>
        <Element name="About" className="about-element">
          <About />
          {/* <NextSectionButton /> */}
        </Element>
        <Element name="PortfolioContainer" className="portfolio-element">
          <PortfolioContainer />
          {/* <NextSectionButton /> */}
        </Element>
        <Element name="Contact" className="contact-element">
          <Contact />
        </Element>
        <ScrollToTopButton scrollToTop={this.scrollToTop} />
      </Container>
    );
  }
}
export default ComponentContainer;
