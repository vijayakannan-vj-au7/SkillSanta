import React, { Component } from "react";

import Cardimg from "./Cardimg";
import Cardbody from "./Cardbody";
import Cardfooter from "./Cardfooter";

export default class Card extends Component {
  render() {
    return (
      <>
        <div className="col-sm-4 order-1">
          <div className="d-flex justify-content-center">
            <div style={{ width: "250px" }} className="card">
              <Cardimg />
              <Cardbody />
              <Cardfooter />
            </div>
          </div>
        </div>
      </>
    );
  }
}

{
}
