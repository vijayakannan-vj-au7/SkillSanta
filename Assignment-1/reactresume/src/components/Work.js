import React, { Component } from "react";
import Title from "./Title";
import Wcontent from "./Wcontent";

export default class Work extends Component {
  render() {
    return (
      <>
        <Title titleText="WORK EXPERIENCE" />
        <div>
          <Wcontent
            cTitle="May 2020 - Present"
            cPosition="Slack Upskilling Community Manager"
            cCompany="SKILLSANTA"
            cWorkdesc="Manage Slack channel. Solve doubts of students and Posts quizzes and assignment."
          />
          <Wcontent
            cTitle="May 2020 - July 2020"
            cPosition="Backend Development Intern"
            cCompany="GIRLSCRIPT FOUNDATION"
            cWorkdesc="Built REST APIs for E-learning platform in Node.js, Express.js and MongoDB."
          />
        </div>
      </>
    );
  }
}
