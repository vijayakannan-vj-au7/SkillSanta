import React, { Component } from "react";
import Title from "./Title";
import Pcontent from "./Pcontent";

export default class Project extends Component {
  render() {
    return (
      <>
        <Title titleText="PROJECTS" />
        <Pcontent
          cProjectName="TASKIFY APPLICATION"
          cProjectDesc="An application build in Node.js, Express.js and MongoDB. It stores tasks of the user. It has login and signup functionality. User can create, read, update and delete tasks. "
          cProjectLink="https://github.com/raushan606/Taskify"
        />
        <Pcontent
          cProjectName="YOUTUBE DOWNLOADER"
          cProjectDesc="A desktop application built using Tkinter. It can download youtube video in high or low quality on entered URL."
          cProjectLink="https://github.com/raushan606/YouTube_Downloader"
        />
        <Pcontent
          cProjectName="RNEWS"
          cProjectDesc="It is a news app in Java. It fetches data from Newsapi.org. It shows news realted to technology. "
          cProjectLink="https://github.com/raushan606/RNews"
        />
        <Pcontent
          cProjectName="COVID-19 HELPER"
          cProjectDesc="This is web application built in React.js. It will show current stats and help you in finding help from government."
          cProjectLink="https://github.com/raushan606/Covid-Project"
        />
      </>
    );
  }
}
