import React, { Component } from "react";

export default class Pcontent extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-3">
            <p className="font-weight-bold text-secondary">
              {this.props.cProjectName}
            </p>
          </div>
          <div className="col-8 offset-1 text-justify">
            <p className="para">
              {this.props.cProjectDesc}
              <a className="para font-italic" href={this.props.cProjectLink}>
                Github
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
