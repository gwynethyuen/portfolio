import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Badge, Card } from 'react-bootstrap';
import Navigation from './Navigation.js';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../css/extra.css';
import Contact from './Contact.js';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container">
        <Navigation/>
        <Container className="px-4">
          <h1 className="siteHeaderTitle mb-3">Education</h1>
          <h3>Rensselaer Polytechnic Institute</h3>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Header as="h5">Master of Science</Card.Header>
              <Card.Body>
                <Card.Title> Information Technology</Card.Title>
                <Card.Text>
                <p>
                  <b>Cumulative GPA: 4.0/4.0</b>
                </p>
                <p>
                  I graduated with a Master of Science in Information Technology with a concentration
                  in Software Design and Engineering. I have taken courses on the front-end and fullstack side of
                  development, which I wasn't able to do that during my undergraduate years. I believe
                  it is important to have the knowledge about all aspects of software development
                  rather than just the back-end.
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Expected Graduation Date: May 2023</small>
              </Card.Footer>
            </Card>
          <div class="mt-4"/>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Header as="h5">Bachelor of Science</Card.Header>
              <Card.Body>
                <Card.Title>Computer Science<br/>Electronic Arts</Card.Title>
                <Card.Text>
                <p>
                  <b>Cumulative GPA: 3.71/4.0<br/>magna cum laude</b>
                </p>
                <p>
                  I graduated with a Bachelor of Science in both Computer Science and
                  Electronic Arts with concentrations in Artificial Intelligence and Data
                  and Animation, respectively. I have received the Rensselaer Leadership
                  Award all four years and have been on the Dean's Honor List (cumulative GPA 3.5 and no grade
                  below C) for all semesters except Fall 2019, during which I was on the Dean's List
                  (cumulative GPA 3.3 and no grade below C).
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Graduation Date: May 2022</small>
              </Card.Footer>
            </Card>
          <div className="mt-5"/>
          <h4>Notable Relevant Coursework</h4>
          <div className="mt-4"/>
          <Container>
          <Row>
            <Col>
              <h5>Computer Science</h5>
              <div className="mt-3"/>
              <ListGroup variant="flush">
                <h6>Completed</h6>
                <ListGroup.Item>Data Structures</ListGroup.Item>
                <ListGroup.Item>Foundations of Computer Science</ListGroup.Item>
                <ListGroup.Item>Computer Organization</ListGroup.Item>
                <ListGroup.Item>Introduction to Algorithms</ListGroup.Item>
                <ListGroup.Item>Modern Binary Exploitation</ListGroup.Item>
                <ListGroup.Item>Game AI</ListGroup.Item>
                <ListGroup.Item>Principles of Software</ListGroup.Item>
                <ListGroup.Item>Operating Systems</ListGroup.Item>
                <ListGroup.Item>Programming Languages</ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Robotics I
                  <a href="https://youtu.be/8OQFvJfcejA" target="_blank" rel="noreferrer">
                  <Badge variant="bg-danger" pill>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Badge>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Software Design and Documentation
                  <a href="https://tft-interpreter.webnode.page" target="_blank" rel="noreferrer">
                  <Badge  className="custom-arrow-btn-2" pill>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Badge>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>Machine Learning from Data</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
              <div className="d-flex align-items-start">
              <h5>Arts Studio</h5>&emsp;
              <a href="https://www.behance.net/gwyneth-yuen" target="_blank" rel="noreferrer">
                    <Badge className="custom-arrow-btn" pill>
                      <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </Badge>
                  </a>
              </div>
              <div className="mt-3"/>
              <ListGroup variant="flush">
                <h6>Completed</h6>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Beginner and Intermediate Digital Imaging
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Digital Filmmaking
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  2D Experimental Animation
                  <a href="https://youtu.be/MawuFgYsUtQ" target="_blank" rel="noreferrer">
                    <Badge className="custom-arrow-btn" pill>
                      <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </Badge>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  3D Digital Modeling
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  3D Visual Effects
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Introduction to Graphic Design
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  3D Animation
                  <a href="https://youtu.be/WekoqcHREQM" target="_blank" rel="noreferrer">
                    <Badge className="custom-arrow-btn" pill>
                      <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </Badge>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Animation Production
                  {/* <Badge className="custom-arrow-btn-2" pill>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Badge> */}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Creative Seminar I and II
                  {/* <Badge className="custom-arrow-btn" pill>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Badge> */}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
              <h5>Information Technology</h5>
              <div className="mt-3"/>
              <ListGroup variant="flush">
                <h6>Completed</h6>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  Software Development
                  <a href="https://github.com/kkatlopez/swim.me" target="_blank" rel="noreferrer">
                    <Badge className="custom-arrow-btn" pill>
                      <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </Badge>
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <h6>Fall 2022</h6>
                <ListGroup.Item>Foundations of HCI Usability</ListGroup.Item>
                <ListGroup.Item>Data Science</ListGroup.Item>
                <ListGroup.Item>Data Analytics</ListGroup.Item>
                <ListGroup.Item>Business Issues for Engineers and Scientists</ListGroup.Item>
                <ListGroup.Item>IT Master's Capstone</ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <h6>Spring 2023</h6>
                <ListGroup.Item>Interface Design</ListGroup.Item>
                <ListGroup.Item>Parallel Programming</ListGroup.Item>
                <ListGroup.Item>Design & Analysis of Algorithms</ListGroup.Item>
                <ListGroup.Item>Database Systems</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
            </Container>
          </Container>
          <Contact/>
        </Container>
    );
  }
}

export default(Education);
