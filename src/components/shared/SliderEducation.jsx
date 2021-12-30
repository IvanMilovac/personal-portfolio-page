import React from "react";

import "./SliderEducation.scss";

const SliderEducation = ({ setEducation }) => {
  return (
    <div className="switch-button">
      <input
        className="switch-button-checkbox"
        onChange={() => setEducation((prev) => !prev)}
        type="checkbox"
      ></input>
      <label className="switch-button-label" htmlFor="">
        <span className="switch-button-label-span">Education</span>
      </label>
    </div>
  );
};

export default SliderEducation;
