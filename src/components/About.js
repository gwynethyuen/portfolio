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
            I am a Technology Analyst at Fiserv, Inc. in Berkeley Heights, NJ.
            I graduated from Rensselaer Polytechnic Institute with a M.S. in Information Technology and a dual B.S. in
            Computer Science and Electronic Arts. I was a Software Engineer Intern at Twilio for the summer of 2022
            and a Data Engineering Intern at SimpliSafe for the summer of 2021. I have experience with
            a variety of programming languages including Python, Java, C++, C#, SQL, and JavaScript.
          </p>
        <Contact/>
      </Container>
    );
  }
}

export default(About);
