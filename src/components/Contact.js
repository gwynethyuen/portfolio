import React, { Component, } from 'react';
import { Container, Button } from 'react-floating-action-button';
import { Modal } from 'react-bootstrap';
import { Button as ReactButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faUser, faCheck, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../css/contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  renderModal() {
    const handleClose=(e)=>{
      this.setState({showModal: !this.state.showModal});
    }

    console.log("rendering");
    return (
      <Modal show={this.state.showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Phone Number: <a href="tel:+16093582327">+1(609)358-2327</a>
        <br/>
        Email Address: <a href="mailto:gwyneth.yuen@gmail.com">gwyneth.yuen@gmail.com</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <ReactButton
          variant="outline-primary"
          className="text-white"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faCheck} style={{color: "white"}}></FontAwesomeIcon>
        </ReactButton>
      </Modal.Footer>
    </Modal>
    );
  }

  render() {
    const handleClick=(e)=>{
      this.setState({showModal: !this.state.showModal});
    }

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
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faUser} style={{color: "white"}}></FontAwesomeIcon>
        </Button>
        {this.state.showModal && this.renderModal()}

        <Button
          styles={{backgroundColor: "#FD7C6F"}}
          className="text-white"
        >
          <a href="https://www.youtube.com/c/fyredevyl"
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} style={{color: "white"}}></FontAwesomeIcon>
          </a>
        </Button>

        <Button
          styles={{backgroundColor: "#FD7C6F"}}
          className="text-white"
        >
          <a href="resume.pdf"
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faFilePdf} style={{color: "white"}}></FontAwesomeIcon>
          </a>
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
