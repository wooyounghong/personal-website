import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import ScrollToNext from './ScrollToNext';
const About = () => (
  <Container className="body-container">
    <Container className="center homepage-intro">About Me</Container>
    <Header as="h2" className="center">
      <Image
        circular
        src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
      />
      <Container className="body-header">Wayne Wooyoung Hong</Container>
    </Header>
    <Image src="" />
    <Container className="body-description">
      I’ve always had an interest in coding and technology, as my father was an
      engineer. However, I never pursued this interest and ended up studying
      economics in school. During that time, I created my own business related
      to the food industry. Delivery applications were practically non-existent
      at the time, which was my primary motivation for creating a late-night
      delivery mobile app based in San Diego. But I soon realized I was unable
      to build this product without technical experience. I had to depend on
      student coders who were interested in creating the application, but had
      limited availability due to attending university. As a result, I was
      forced to abandon this idea. I soon went on to pursue digital marketing,
      which I found very interesting. Yet during that course, my professor
      continually emphasized the importance of web development, leading me to
      begin an online Udemy coding course. Through this course, I came to
      realize that I thoroughly enjoyed coding more than any other subject I had
      studied previously, and I wanted to continue pursuing this career path.
      This was my primary motivation for applying and attending Fullstack, which
      has been an incredible learning experience thus far. In the future I would
      like to explore opportunities in edTech, finTech, and Cloud IT company at
      small to large-sized company. What I am currently doing is creating
      website for a Cloud IT start-up as well as studying for MSCE 50-732,
      50-733, and 50-733 to become certified as Microsoft Cloud Solutions
      Expert.
    </Container>
    <ScrollToNext element={'PortfolioContainer'} />
  </Container>
);

export default About;
