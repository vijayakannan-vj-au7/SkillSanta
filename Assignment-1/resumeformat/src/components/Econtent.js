import React, { Component } from "react";

export default class Econtent extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-3">
            <p className="font-weight-bold text-secondary">
              {this.props.cYear}
            </p>
          </div>
          <div className="col-8 offset-1 text-justify">
            <p className="para">
              <span className="font-weight-bold">{this.props.cCollege}</span>
              <br />
              <span>{this.props.cDegree}</span>
              <br />
              <span className="font-italic">{this.props.cMark}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
