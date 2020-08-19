import React, { Component } from "react";

export default class Ccontent extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-3">
            <p className="font-weight-bold text-secondary">
              {this.props.cInstitute}
            </p>
          </div>
          <div className="col-8 offset-1 text-justify">
            <p className="para">
              {this.props.cTopic} <br />
              <a className="para font-italic" href={this.props.cLink}>
                Link
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
