import React, { Component, } from 'react';
import { Container, Button } from 'react-floating-action-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container">
        <Button
          styles={{backgroundColor: "#FD7C6F"}}
        >
          <a href="https://www.linkedin.com/in/gwynethyuen/"
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "white"}}></FontAwesomeIcon>
          </a>
        </Button>

        <Button
          styles={{backgroundColor: "#FD7C6F"}}
          className="text-white"
        >
          <FontAwesomeIcon icon={faUser} style={{color: "white"}}></FontAwesomeIcon>
        </Button>

        <Button
          styles={{backgroundColor: "#FD7C6F"}}
        >
          <FontAwesomeIcon icon={faChevronUp} style={{color: "white"}}></FontAwesomeIcon>
        </Button>
      </Container>
    );
  }
}

export default(Contact);
