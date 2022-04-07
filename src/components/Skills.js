import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, Badge, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container">
        <Container fluid className="siteHeader d-flex align-items-center">
          <Button variant="menu"><FontAwesomeIcon icon={faBars}/></Button>
          <Image src={require("../images/header.png")} fluid width="200"></Image>
        </Container>
        <Container className="px-4">
          <h1 className="siteHeaderTitle mb-3">Skills</h1>
          <Row>
            <Col>
              <h2>Programming Languages</h2>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <div>Python</div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
                <ListGroup.Item>C</ListGroup.Item>
                <ListGroup.Item>HTML5</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h2>Libraries/Frameworks</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>Bootstrap</ListGroup.Item>
                <ListGroup.Item>React.js</ListGroup.Item>
                <ListGroup.Item>Node.js</ListGroup.Item>
                <ListGroup.Item>MongoDB</ListGroup.Item>
                <ListGroup.Item>SQL</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h2>Tools/Platforms</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>Git</ListGroup.Item>
                <ListGroup.Item>GitHub</ListGroup.Item>
                <ListGroup.Item>LaTeX</ListGroup.Item>
                <ListGroup.Item>Google Drive</ListGroup.Item>
                <ListGroup.Item>Microsoft Office</ListGroup.Item>
                <ListGroup.Item>Adobe Creative Suite</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default(Skills);
