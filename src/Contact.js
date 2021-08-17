import React, { Component } from "react";
import image9 from './UnderMaintenance.jpg';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="header">Contact page is currently unavailable</h2>
        <img className="UnderMaintenance" src={image9} />
        <h2 className="header">Sorry for the inconvenience</h2>
      </div>
    );
  }
}
 
export default Contact;