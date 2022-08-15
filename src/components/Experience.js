import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import Navigation from './Navigation.js';
import Contact from './Contact.js';
import Skills from './Skills.js';

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
              <Card.Header as="h5">Twilio Segment</Card.Header>
              <Card.Body>
                <Card.Title>Software Engineer Intern</Card.Title>
                <div className="mt-3"/>
                <Card.Text>
                <p>
                  <b>San Francisco, CA (remote)</b>
                </p>
                <p>
                  I interned at Twilio, a company that provides programmable communication tools based
                  in San Francisco, CA, during the summer of 2022. I was part of the Personas Compute team.
                  I completed a project that added a new operator, called the "in" operator, to the traits
                  builder, which is a part of the personas section of the Segment application.
                  This new operator provides a way for users to compare the equality of one value to a
                  list of values in one statement, rather than having to add multiple "equals" conditions.
                  The results of the addition of the "in" operator were an increased computation speed as well
                  as improved user experience.
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Dates: May 2022 - August 2022</small>
              </Card.Footer>
            </Card>
            <div className="mt-3"/>
            <Card>
              <Card.Header as="h5">SimpliSafe Home Security</Card.Header>
              <Card.Body>
                <Card.Title>Data Engineering/Business Intelligence Intern</Card.Title>
                <div className="mt-3"/>
                <Card.Text>
                <p>
                  <b>Boston, MA (remote)</b>
                </p>
                <p>
                  I interned at SimpliSafe, an award-winning smart home security based
                  in Boston, MA, during the summer of 2021. I was part of the Data Analytics team, and
                  my responsibilities included creating SQL tables and bash scripts to automate python scripts
                  to Amazon Athena and S3.
                </p>
                <p>
                  I completed a project to generate a daily metrics report
                  for the call center. It entailed writing an automated python script to
                  run daily and creating a SQL table with daily metrics for internal call center
                  agents, as well as creating and sharing a set of visualizations on month-to-date
                  performance as a PDF through Google Drive. This project incorporated the
                  use of python, SQL, and shell. I originally created a table from python
                  but was a SQL script that pulled the necessary metrics data from a pre-existing table.
                  Internally, I used the Google Drive API in order to share the documents with
                  the call center agents, and <code>matplotlib</code> to generate the graphs for
                  each of the metrics I determined would be useful. The final part of the project
                  was a presentation to the Call Center and Data Analytics teams before migration the
                  code into production.
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Dates: June 2021 - August 2021</small>
              </Card.Footer>
            </Card>
          <div className="mt-3"/>
            <Card>
              <Card.Header as="h5">American Pool Enterprises, Inc.</Card.Header>
              <Card.Body>
                <Card.Title>Lifeguard</Card.Title>
                <div className="mt-3"/>
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
        <div className="mt-5"/>
        <Skills/>
        <Contact/>
      </Container>
    );
  }
}


export default(Experience);
