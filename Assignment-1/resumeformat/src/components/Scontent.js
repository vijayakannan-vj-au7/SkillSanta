import React, { Component } from "react";

export default class Scontent extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-3">
            <p className="font-weight-bold text-secondary ">
              {this.props.cSkill}
            </p>
          </div>
          <div className="col-8 offset-1 text-justify">
            <p className="para">{this.props.cDesc}</p>
          </div>
        </div>
      </>
    );
  }
}
