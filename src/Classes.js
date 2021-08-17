import React, { Component } from "react";
import image6 from './ClimbingClass.jpg';
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <img className="ClassIMG" src={image6} />
        <h2>Classes and Tutorials</h2>
        <ol>
          <li>Climbing safety and basics</li>
          <li>Bouldering</li>
          <li>Auto Belays</li>
          <li>Top Rope</li>
          <li>Lead Climbing (Advanced)</li>
          <li>Speed Climbing (Advanced)</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;