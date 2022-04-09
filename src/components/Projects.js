import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Navigation from './Navigation.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import '../css/extra.css';
import Contact from './Contact.js';

class Projects extends Component {

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
          <h1 className="siteHeaderTitle mb-3">Projects</h1>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">swim.me</Card.Header>
            <Card.Body>
              <Card.Title as="h6">Software Development</Card.Title>
              <Card.Subtitle as="h7"><i>Spring 2022</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                A mobile-focused application using the MERN stack that is a one-stop-shop for all
                of the applications that the RPI Swimming and Diving varsity team
                uses. Although it was created as a project for my software development class, it has
                been a project I've been wanting to do for a while. With so many different
                applications being used such as SwimCloud (swim results and rankings), GroupMe
                (for messaging), Google Calendar (events), Google Drive (forms and documents), and
                the RPI Athletics page (roster), it is difficult to keep track of and get ahold
                of people. We designed an application that combines a majority of these into one.
                This project was a group of four people, and I worked on the pages for admin as
                well as the page for alerts and calendar.
              </Card.Text>
              <Button
                style={{color: "#1B2937"}}
                variant="primary"
                href="https://github.com/kkatlopez/swim.me"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLink}/> Repository</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">TFT Interpreter</Card.Header>
            <Card.Body>
            <Card.Title as="h6">Software Design & Documentation</Card.Title>
            <Card.Subtitle as="h7"><i>Spring 2022</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                A simple GUI created with Python and Tkinter designed to use computer vision
                to capture an active TeamFight Tactics game and identify the units on the
                board when in the planning phase. Then, suggestions are provided to the user
                on which units to purchase to build the most powerful compositions, which
                are determined by scraping pre-existing data, and factors in currency and other
                gamestate variables. This was a group of five colleagues, and throughout this
                project I worked mostly on the GUI as well as the starting point for determining
                whether or not the user is in the planning phase using computer vision.
              </Card.Text>
              <Button
                variant="primary" href="https://tft-interpreter.webnode.page" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/> Website</Button>
              &nbsp;
              <Button variant="primary" href="https://github.com/BrianHotopp/TFTInterpreter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/> Repository</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">Portfolio</Card.Header>
            <Card.Body>
            <Card.Title as="h6">Personal Project</Card.Title>
            <Card.Subtitle as="h7"><i>Ongoing</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                My personal portfolio which you're looking at right now! Originally started
                on <a href="https://gwynethyuen.github.io" target="_blank" rel="noreferrer">GitHub</a>, I've
                now migrated to an actual domain for better access and professionalism. I
                started this after taking my software development course and finally learning
                front-end elements in a class setting. This will hopefully always be under
                development if I remember it exists.
              </Card.Text>
              <Button variant="primary" href="https://github.com/gwynethyuen/portfolio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/> Repository</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">DuckieChase</Card.Header>
            <Card.Body>
            <Card.Title as="h6">Robotics I</Card.Title>
            <Card.Subtitle as="h7"><i>Fall 2021</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                A project for a Robotics course that made use of Python and Docker. As a group of
                three members, we were provided with a <a href="https://www.duckietown.org">Duckiebot</a> that
                makes use of AI and robots. The project we decided to do was allow the Duckiebot
                to wander around an area until it sees a rubber duck, and at that point it will chase
                the duck until the duck is caught or out of frame. It implements object detection,
                collision avoidance, and autonomous movement. This project was spawned with the idea
                of self driving cars and how they are able to detect other objects around such as the
                lanes on the road and other cars, as well as traffic lights. We incorporated the use
                of computer vision to detect the yellow color of the duck.
              </Card.Text>
              <Button variant="primary" href="https://github.com/matthewyoungbar/duckie-chase" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/> Repository</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">Resolute</Card.Header>
            <Card.Body>
            <Card.Title as="h6">Computability and Logic</Card.Title>
            <Card.Subtitle as="h7"><i>Spring 2021</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                Resolute was a project done for a course called Computability and Logic. The objective
                of this course was to fully understand logic functions and computations. The project
                was designed to solve resolution logic problems and provides a complete solution graphing
                the resolution of the terms in given logic sentences. This was designed in python
                and uses Tkinter as the GUI interface.
              </Card.Text>
              <Button variant="primary" href="https://github.com/matthewyoungbar/Resolute" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/> Repository</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">SwimBot</Card.Header>
            <Card.Body>
            <Card.Title as="h6">Group Project (not coursework)</Card.Title>
            <Card.Subtitle as="h7"><i>Summer 2020</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                A very short-lived project two of my friends and I worked on during the summer
                of 2020 when I had absolutely nothing to do (internships were difficult to obtain).
                This was a Discord bot that we created using python and deployed through Heroku.
                The bot has functions like reading from SwimCloud (a website that stores swimmer
                times, results, and rankings) and searching that information and playing marco polo.
                We would have added more functionality, however, the Discord server that was created
                is no longer in use.
              </Card.Text>
              <Button variant="primary" href="https://github.com/matthewyoungbar/Discord-SwimBot" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/> Repository</Button>
            </Card.Body>
          </Card>
          <div className="mt-3"/>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Header as="h5">Disaster Guide</Card.Header>
            <Card.Body>
            <Card.Title as="h6">HackRPI</Card.Title>
            <Card.Subtitle as="h7"><i>November 2019</i></Card.Subtitle>
              <div className="mt-3"/>
              <Card.Text>
                The Disaster Guide was a two day project for HackRPI, a hackathon hosted by my
                school. It incorporated the use of python, the Google Cloud API, and front-end
                languages like HTML, CSS, and JavaScript. The purpose of the Disaster Guide is
                to provide a list of nearby hospitals and relief sites to the user's current location
                so that they would know where to go if necessary.
              </Card.Text>
              <Button variant="primary" href="https://github.com/matthewyoungbar/Disaster-Guide" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/> Repository</Button>
            </Card.Body>
          </Card>
        </Container>
        <Contact/>
      </Container>
    );
  }
}

export default(Projects);
