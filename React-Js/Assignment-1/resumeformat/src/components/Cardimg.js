import React, { Component } from "react";
import ProImg from "../images/profile.jpg";

export default class Cardimg extends Component {
  render() {
    return (
      <>
        <img className="card-image-top" src={ProImg} alt="profile image" />
      </>
    );
  }
}
