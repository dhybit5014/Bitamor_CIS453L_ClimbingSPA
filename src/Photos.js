import React, { Component } from "react";
import image1 from './Climbing1.jpg';
import image2 from './Climbing2.jpg';
import image3 from './Climbing3.jpg';
import image4 from './Climbing4.jpg';
 
class FavoriteActivities extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="header">We promise... you are going to love your experience!</h2>
        <ul className="gallery">
            <img className="item" src={image1} />
            <img className="item" src={image2} />
            <img className="item" src={image3} />
            <img className="item" src={image4} />
        </ul>
      </div>
    );
  }
}

export default FavoriteActivities;