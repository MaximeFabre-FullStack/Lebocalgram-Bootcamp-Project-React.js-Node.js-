import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./style.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="player_container">
        <h2>L'actualité du Bocal</h2>
        <div className="player_1">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=oYjE-dMhMMA"
            controls={true}
          />
        </div>
        <br />
        <div className="player_1">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qVqR3uE2H0E"
            controls={true}
          />
        </div>
        <br />
        <h2>L'actualité de JavaScript</h2>
        <div className="player_1">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=f0DrPLKf6Ro"
            controls={true}
          />
        </div>
        <br />
        <div className="player_1">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3oefKzjCU4w"
            controls={true}
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
