import React, { Component } from "react";
import image8 from './HomeImage.jpg';
 
class Home extends Component {
  render() {
    return (
      <div>
        <img className="HomeImage" src={image8} />
        <h2>Welcome to Climbing 101</h2>
        <li> Climbing 101 is a one stop shop for all your climbing basics.
            Here you can find access to tutorials, classes, gear, and much more.
        </li>
        <h2>Why go climb?</h2>
        <li> Climbing 101 is all about learning, being safe, all while having fun. If you like to stay
            active and want another outlet other than repeatedly going to your traditional gym, then
            wall climbing is for you. It is the perfect avenue to stay active, get strong, and 
            share a space with people that love the sport. 
        </li>
        <p>Please explore and enjoy the site!</p>
      </div>
    );
  }
}

export default Home;