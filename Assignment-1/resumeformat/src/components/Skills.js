import React, { Component } from "react";
import Title from "./Title";
import Scontent from "./Scontent";

export default class Skill extends Component {
  render() {
    return (
      <>
        <div>
          <Title titleText="SKILLS" />
          <Scontent
            cSkill="Language"
            cDesc="C, C++, Java, Python, JavaScript."
          />
          <Scontent cSkill="Database" cDesc="MySQL, MongoDB." />
          <Scontent
            cSkill="Web Technology"
            cDesc="HTML, CSS, React.js, Bootstrap4, Node.js, Express.js, Mongoose, MaterialUI."
          />
          <Scontent
            cSkill="Tools"
            cDesc="VS Code, Anaconda, IntelliJ IDEA, WebStorm, MongoDB Compass, MySQL Workbench."
          />
        </div>
      </>
    );
  }
}
