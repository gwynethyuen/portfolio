import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Container, DropdownButton, Dropdown, Card } from 'react-bootstrap';
// import { Link, withRouter } from 'react-router-dom';
// import '../css/meetresults.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import MeetCard from "./MeetCard.js";
// import Navigation from "./Navigation.js";
// import moment from 'moment';

class Home extends Component {

  constructor(props) {
    super(props);
    // if(this.props.location.state == undefined){
    //   this.props.history.push("/", { logged: false });
    // }
    // else if (!('logged' in this.props.location.state)){
    //   this.props.history.push("/", { logged: false });
    // }
    // else if(this.props.location.state.logged == false){
    //   this.props.history.push("/", { logged: false });
    // }
    this.state = {
      // meetlist: [],
      // dropdownlist: [],
      // logged: this.props.location.state.logged,
      // admin: this.props.location.state.admin,
      // user: this.props.location.state.user
    }
  }

  render() {
    return(
      // <h1>Homepage</h1>
      <Container fluid className="page-container">
        <h1>Gwyneth Yuen</h1>
      </Container>
      // <Container fluid className="page-container">
      //   <Container fluid className="siteHeader d-flex align-items-end">
      //     <h1 className="siteHeaderTitle px-3 mb-3">Meet Results</h1>
      //   </Container>
      //   <Container className="px-4">
      //     <label>Meet</label>
      //     <DropdownButton className="dropdown pb-3" title="Select a meet">
      //       {
      //         this.state.dropdownlist.map( (lister) => {
      //           return(<Dropdown.Item onClick={() => this.sendProps(lister)}>{lister.meetName}</Dropdown.Item>)
      //         })
      //       }

      //     </DropdownButton>
      //     <h2 className="sectionTitle">Latest Results</h2>
      //     <div className="meet-cards">
      //       {
      //         this.state.meetlist.map( (lister) => {
      //             return(<MeetCard meetname={lister.meetName} meetdate={moment(lister.meetStartDate).format('ll')} meetoriginaldate={lister.meetStartDate}
      //             logged={this.props.location.state.logged}
      //             admin={this.props.location.state.admin}
      //             user={this.props.location.state.user}
      //             />)
      //         })
      //       }

      //     </div>
      //   </Container>

      //   <Navigation logged = {this.props.location.state.logged} admin = {this.props.location.state.admin} user = {this.props.location.state.user}/>
      // </Container>

    );
  }
}

export default(Home);
