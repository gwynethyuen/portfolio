import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import Navigation from './Navigation.js';
import Contact from './Contact.js';

class Experience extends Component {

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
          <h1 className="siteHeaderTitle mb-3">Experience</h1>
            <Card>
              <Card.Header as="h5">SimpliSafe Home Security</Card.Header>
              <Card.Body>
                <Card.Title>Data Engineering/Business Intelligence Intern</Card.Title>
                <div class="mt-3"/>
                <Card.Text>
                <p>
                  <b>Boston, MA (remote)</b>
                </p>
                <p>
                  I did simple ad hoc tasks for the Data Analytics team, which
                  included creating SQL tables and bash scripts to automate any python scripts
                  to Amazon Athena and S3. I also wrote and automated a python script to
                  run daily and create an SQL table with daily metrics for internal call center
                  agents as well as create and share a set of visualizations on month-to-date
                  performance as a PDF through Google Drive. This project incorporated the
                  use of python, SQL, and shell. I originally created a table from python
                  but was a SQL script that pulled the necessary metrics data from a pre-existing table.
                  Internally, I used the Google Drive API in order to share the documents with
                  the call center agents, and <code>matplotlib</code> to generate the graphs for
                  each of the metrics I determined would be useful.
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Dates: June 2021 - August 2021</small>
              </Card.Footer>
            </Card>
          <div class="mt-3"/>
            <Card>
              <Card.Header as="h5">American Pool Enterprises, Inc.</Card.Header>
              <Card.Body>
                <Card.Title>Lifeguard</Card.Title>
                <div class="mt-3"/>
                <Card.Text>
                <p>
                  <b>Princeton Jct, NJ</b>
                </p>
                <p>
                  I learned and maintained proficiency in First Aid and CPR.
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Dates: May 2018 - August 2018</small>
              </Card.Footer>
            </Card>
          {/* </Row> */}
        </Container>
        <Contact/>
      </Container>
    );
  }
}


export default(Experience);
