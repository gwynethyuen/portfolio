import React, { Component } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Container fluid className="page-container">
        <Container className="px-4">
          <h1 className="siteHeaderTitle mb-3">Skills</h1>
          <Row>
            <Col>
              <h2>Programming Languages</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
                <ListGroup.Item>C</ListGroup.Item>
                <ListGroup.Item>HTML5</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>TypeScript</ListGroup.Item>
                <ListGroup.Item>Scala</ListGroup.Item>
                <ListGroup.Item>C#</ListGroup.Item>
                <ListGroup.Item>Powershell</ListGroup.Item>
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
                <ListGroup.Item>Jira</ListGroup.Item>
                <ListGroup.Item>Visual Studio Code</ListGroup.Item>
                <ListGroup.Item>IntelliJ</ListGroup.Item>
                <ListGroup.Item>Microsoft Team Foundation Server (TFS)</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default(Skills);
