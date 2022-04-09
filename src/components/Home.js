import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from "./Navigation.js";
import Contact from './Contact.js';
import About from './About.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container">
        <Navigation/>
        <Container className="px-4">
          <h1 className="siteHeaderTitle mb-3">Gwyneth Yuen</h1>
          <About/>
        </Container>
        <Contact/>
      </Container>
    );
  }
}

export default(Home);
