import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Card from "./components/Card";
import Skill from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Project from "./components/Projects";
import Certificate from "./components/Certificates";

import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-8 order-sm-1 order-2">
            <Heading />
            <Skill />
            <Work />
            <Education />
            <Project />
            <Certificate />
            <Contact />
          </div>
          <div className="col-sm-4 order-1">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
