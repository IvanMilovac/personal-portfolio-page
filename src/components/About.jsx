import React, { useState } from "react";

import SliderEducation from "./shared/SliderEducation.jsx";
import Timeline from "./shared/Timeline.jsx";

import { workData, educationData } from "./data.js";

import "./About.scss";

const About = () => {
  const [education, setEducation] = useState(true);
  return (
    <div className="about-container">
      <h2 className="about-page-title">About my...</h2>
      <SliderEducation setEducation={setEducation} />
      <div className="timeline">
        {education && <Timeline data={educationData} graduated />}
        {!education && <Timeline data={workData} current />}
      </div>
    </div>
  );
};

export default About;
