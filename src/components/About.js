import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Contact from './Contact.js';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container" id="about">
          <p>
            I am a senior and rising graduate student at Rensselaer Polytechnic Institute with a dual B.S. in
            Computer Science and Electronic Arts and working towards an M.S. in Information Technology. I am
            actively seeking internships for Summer 2022 and full-time positions after May 2023. I am also open
            to part-time positions during the school year from August 2022 to May 2023. I have experience with
            a variety of programming languages including Python, Java, C++, and JavaScript.
          </p>
        <Contact/>
      </Container>
    );
  }
}

export default(About);
