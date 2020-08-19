import React, { Component } from "react";
import Title from "./Title";
import Ccontent from "./Ccontent";

export default class Certificate extends Component {
  render() {
    return (
      <>
        <Title titleText="CERTIFICATES" />
        <Ccontent
          cInstitute="COURSERA"
          cTopic="Server-side Development with NodeJS, Express and MongoDB."
          cLink="Link"
        />
        <Ccontent
          cTopic="Divide and Conquer, Sorting and Searching, and Randomized Algorithms."
          cLink="Link"
        />
        <Ccontent cTopic="Machine Learning." cLink="Link" />
        <Ccontent
          cInstitute="UDEMY"
          cTopic="The Complete Node.js Developer Course (3rd Edition)."
          cLink="Link"
        />
        <Ccontent
          cTopic="JavaScript Bootcamp - Build Real World Applications."
          cLink="Link"
        />
      </>
    );
  }
}
