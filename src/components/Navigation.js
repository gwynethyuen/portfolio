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
                    <Nav.Link activeClassName="home" href="/"><FontAwesomeIcon icon={faHome}/></Nav.Link>
                    <Nav.Link activeClassName="about" href="/about"><FontAwesomeIcon icon={faUser}/></Nav.Link>
                    <Nav.Link activeClassName="education" href="/education"><FontAwesomeIcon icon={faGraduationCap}/></Nav.Link>
                    <Nav.Link activeClassName="experience" href="/experience"><FontAwesomeIcon icon={faBriefcase}/></Nav.Link>
                    <Nav.Link activeClassName="projects" href="/projects"><FontAwesomeIcon icon={faCode}/></Nav.Link>
                    <Nav.Link activeClassName="extracurriculars" href="/extracurriculars"><FontAwesomeIcon icon={faPersonSwimming}/></Nav.Link>
                    <Nav.Link activeClassName="skills" href="/skills"><FontAwesomeIcon icon={faPencil}/></Nav.Link>
                  </Container>
                </Nav>
            </Container>
          </Navbar>
    );
  }
}

export default (Navigation);
