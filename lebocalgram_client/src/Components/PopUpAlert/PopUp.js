import React, { Component } from "react";
import "./style.css";

class PopUp extends Component {
  render() {
    return (
      <div className="pop_up_alert">
        <p>Oups il semblerait que vous n'ayez pas {this.props.text}</p>
      </div>
    );
  }
}

export default PopUp;
