import React, { Component } from "react";
import image9 from './UnderMaintenance.jpg';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="header">Contacts currently unavailable.</h2>
        <img className="UnderMaintenance" src={image9} />
      </div>
    );
  }
}
 
export default Contact;