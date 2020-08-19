import React, { Component } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default class Social extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <div>
              <a href="https://www.github.com">
                <FaGithub />
              </a>

              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>

              <a href="https://www.linkedin.com">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
