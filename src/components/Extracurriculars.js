import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Navigation from './Navigation.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact.js';

class Extracurriculars extends Component {
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
          <h1 className="siteHeaderTitle mb-3">Extracurriculars</h1>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">Undergraduate Mentor</Card.Header>
            <Card.Body>
              <Card.Title as="h6">Introduction to Computer Science</Card.Title>
              <Card.Subtitle as="h7"><i>Fall 2020, Fall 2021, Spring 2022</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                Facilitated labs and office hours, and graded homeworks.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">Undergraduate Mentor</Card.Header>
            <Card.Body>
              <Card.Title as="h6">Introduction to Algorithms</Card.Title>
              <Card.Subtitle as="h7"><i>Spring 2021</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                Facilitated labs and office hours, and graded homeworks.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">RPI Swimming and Diving</Card.Header>
            <Card.Body>
            <Card.Title as="h6">Varsity Team</Card.Title>
            <Card.Subtitle as="h7"><i>Fall 2018-Spring 2022</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                I was on the Liberty League All-Academic Team (minimum 3.3 GPA) for
                the school years 2019-2020 and 2021-2022, as freshmen aren't eligible
                I wasn't on it for 2018-2019. We unfortunately did not get to swim in 2020-2021.
                I am in the Top 10 all time school times for the 50 Yard Freestyle (9th)
                and the 100 Yard Backstroke (10th).
              </Card.Text>
              <Button
                variant="primary"
                href="https://www.swimcloud.com/swimmer/488426/"
                target="_blank"
              >
                  <FontAwesomeIcon icon={faLink}/> SwimCloud</Button>
              &nbsp;
              <Button
                variant="primary"
                href="https://rpiathletics.com/sports/womens-swimming-and-diving/roster/gwyneth-yuen/16714"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink}/> RPI Athletics</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">Peddie Swimming</Card.Header>
            <Card.Body>
            <Card.Title as="h6">Club Swim Team</Card.Title>
            <Card.Subtitle as="h7"><i>2009-2018</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                I was on my club swim team for almost 10 years (and was on another for half a year).
                During my time on the Peddie Aquatics Association swim team, I swam two hours a day
                for five or six days a week when I was in high school, with monthly or bi-monthly
                swim meets, some of which were prelims and finals. This team operated year round, and
                we only had a two week break in April and a month break in August.
              </Card.Text>
              <Button
                variant="primary"
                href="https://www.teamunify.com/team/njpa/page/home"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink}/> Team Page</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">West Windsor-Plainsboro High School North Swimming</Card.Header>
            <Card.Body>
            <Card.Title as="h6">High School Varsity Swim Team</Card.Title>
            <Card.Subtitle as="h7"><i>2014-2018</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                In addition to competing for Peddie Aquatics Association, in high school, I also competed for the
                swim team for all four years. I was one of the top scorers for my high school and was also a school
                record holder for three events - the 100 Short Course Meters (SCM) Backstroke, and
                two relays, the 200 SCM Medley Relay and the 400 SCM Freestyle Relay.
                Being on both a club team and a high school team is a big commitment. More importantly,
                I learned how to manage my time efficiently. During the swim seasons, I had to juggle
                dual swim practices and swim meets, with the backdrop of a very demanding academic
                curriculum. In my senior year, my
                team was the Valley Division, Mercer County Tournament, and NJSIAA Central Jersey Group B champions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Contact/>
      </Container>
    );
  }
}

export default(Extracurriculars);
