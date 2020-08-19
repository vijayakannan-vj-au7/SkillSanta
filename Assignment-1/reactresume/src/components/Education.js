import React, { Component } from "react";
import Title from "./Title";
import Econtent from "./Econtent";

export default class Education extends Component {
  render() {
    return (
      <>
        <Title titleText="EDUCATION" />
        <div>
          <Econtent
            cYear="2009-2012"
            cCollege="PSG College Of Technology, Coimbatore."
            cDegree="Btech. Information Technology"
            cMark="CGPA : 6.25"
          />
          <Econtent
            cYear="2005-2008"
            cCollege="CIT Sandwish Polytechnic College, Coimbatore."
            cDegree="Diploma in Computer Engineering"
            cMark="79%"
          />
        </div>
      </>
    );
  }
}
