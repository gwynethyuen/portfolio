import React, { Component, } from 'react';
import { Container, Button } from 'react-floating-action-button';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';

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
    // console.log("the link " + this.props.url + " was clicked.")
    console.log("rendering");
    return (
      <Modal show={this.state.showModal} onHide={handleClose}>
        {/* <Modal show={this.state.showModal}> */}
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        {/* <Button variant="secondary"> */}
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
        {/* <Button variant="primary"> */}
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
      // <div className="modal show">
      //   <div className="modal-dialog modal-dialog-centered" role="document">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <h5 className="modal-title" id="exampleModalLongTitle">Modal 
      //         title</h5>

      //         <button type="button" className="close" data-dismiss="modal" 
      //         aria-label="Close">
      //         <span aria-hidden="true">&times;</span>
      //         </button>
      //       </div>
      //       <div className="modal-body">
      //         ...
      //       </div>
      //       <div className="modal-footer">
      //         <button type="button" className="btn btn-secondary" data- 
      //          dismiss="modal">Close</button>
      //         <button type="button" className="btn btn-primary">Save 
      //         changes</button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
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
      {/* </div> */}

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
        >
          <FontAwesomeIcon icon={faChevronUp} style={{color: "white"}}></FontAwesomeIcon>
        </Button>
      </Container>
    );
  }
}

export default(Contact);
