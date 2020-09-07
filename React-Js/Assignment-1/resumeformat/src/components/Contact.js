import React, { Component } from "react";
import Social from "./Social";
import Title from "./Title";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Title titleText="CONTACT" />
        <div className="mb-4 ">
          <Social />
        </div>
      </>
    );
  }
}
