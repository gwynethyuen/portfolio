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
            I am a rising graduate student at Rensselaer Polytechnic Institute with a dual B.S. in
            Computer Science and Electronic Arts and working towards a M.S. in Information Technology.
            I was a Software Engineer Intern at Twilio for the summer of 2022.
            I am open to part-time positions during the school year from August 2022 to May 2023 and
            full-time positions after May 2023. I have experience with
            a variety of programming languages including Python, Java, C++, SQL, and JavaScript.
          </p>
        <Contact/>
      </Container>
    );
  }
}

export default(About);
