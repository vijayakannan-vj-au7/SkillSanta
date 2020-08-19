import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <>
        <div className="row mt-4">
          <div className="col-4">
            <hr class="hrr" />
          </div>
          <div className="col-4">
            <p class="text-center">{this.props.titleText}</p>
          </div>
          <div className="col-4">
            <hr class="hrr" />
          </div>
        </div>
      </>
    );
  }
}
