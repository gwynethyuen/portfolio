import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faBriefcase, faCode, faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
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
                    <Nav.Link href="/"><FontAwesomeIcon icon={faHome}/></Nav.Link>
                    <Nav.Link href="/education"><FontAwesomeIcon icon={faGraduationCap}/></Nav.Link>
                    <Nav.Link href="/experience"><FontAwesomeIcon icon={faBriefcase}/></Nav.Link>
                    <Nav.Link href="/projects"><FontAwesomeIcon icon={faCode}/></Nav.Link>
                    <Nav.Link href="/extracurriculars"><FontAwesomeIcon icon={faPersonSwimming}/></Nav.Link>
                  </Container>
                </Nav>
            </Container>
          </Navbar>
    );
  }
}

export default (Navigation);
