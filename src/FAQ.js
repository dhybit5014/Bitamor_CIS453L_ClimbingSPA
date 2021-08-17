import React, { Component } from "react";
import image7 from './FAQ.jpg';
 
class FAQ extends Component {
  render() {
    return (
      <div>
        <img className="FaqIMG" src={image7} />
        <h2>Frequently Asked Questions:</h2>
        <ol>
        <ul>
        <li className="FaqHeader">Q: Why should I include climbing as part of my fitness program?</li>
            <ul>
                <p>A: rock climbing is unique among sports in that it requires a near-equal balance of mental, 
                    technical, and physical ability.  So it provides a good all-around work out.
                </p>
            </ul>
        </ul>
        <ul>
        <li className="FaqHeader">Q: What’s the colored tape?</li>
            <ul>
                <p>A: The colored tapes mark a specific route. The routes vary in degree of difficulty.  
                    In general, the bigger the hold, the easier the route. But, what may be easy for one person 
                    may be quite challenging for another.
                </p>
            </ul>
        </ul>
        <ul>
        <li className="FaqHeader">Q: How do you know the equipment is safe?</li>
            <ul>
                <p>A: Our staff inspects the equipment.  The belay devices and harnesses are inspected at every use.  
                    The ropes, holds, anchors and are inspected monthly. If there is any question as to the condition 
                    of a piece of equipment, it is removed from the inventory.
                </p>
            </ul>
        </ul>
        </ol>
      </div>
    );
  }
}
 
export default FAQ;