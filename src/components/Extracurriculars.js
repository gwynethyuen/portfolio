import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Extracurriculars extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container">
        <h1>Extracurriculars</h1>
      </Container>
    );
  }
}

export default(Extracurriculars);
