import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGraduationCap, faBriefcase, faCode, faPersonSwimming, faPencil } from '@fortawesome/free-solid-svg-icons';
import '../css/navigation.css';

class Navigation extends Component {
  constructor(props) {
	super(props);
    this.state = {

    };
  }

  render() {
    return(
          <Navbar fixed='top' expand='sm' sticky="top">
            <Container>
                <Nav>
                  <Container className="d-flex justify-content-between icons">
                    {/*To Do: scrollable through pages, about page linked to "/"*/}
                    <Nav.Link href="/"><FontAwesomeIcon icon={faHome}/></Nav.Link>
                    {/* <Nav.Link href="/about"><FontAwesomeIcon icon={faUser}/></Nav.Link> */}
                    <Nav.Link href="/education"><FontAwesomeIcon icon={faGraduationCap}/></Nav.Link>
                    <Nav.Link href="/experience"><FontAwesomeIcon icon={faBriefcase}/></Nav.Link>
                    <Nav.Link href="/projects"><FontAwesomeIcon icon={faCode}/></Nav.Link>
                    <Nav.Link href="/extracurriculars"><FontAwesomeIcon icon={faPersonSwimming}/></Nav.Link>
                    {/* <Nav.Link href="/skills"><FontAwesomeIcon icon={faPencil}/></Nav.Link> */}
                  </Container>
                </Nav>
            </Container>
          </Navbar>
    );
  }
}

export default (Navigation);
