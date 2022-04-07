import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container">
        <h1>Projects</h1>
      </Container>
    );
  }
}

export default(Projects);
