import React, { Component } from "react";

export default class Wcontent extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-3">
            <p className="font-weight-bold text-secondary">
              {this.props.cTitle}
            </p>
          </div>

          <div className="col-8 offset-1 text-justify">
            <p>
              <span className="font-weight-bold">{this.props.cPosition}</span>
              <br />
              <span>{this.props.cCompany}</span>
              <br />
              <span className="font-italic">{this.props.cWorkdesc}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
