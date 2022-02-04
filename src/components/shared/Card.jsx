import React from "react";

import Github from "../../assets/github2.png";
import Globe from "../../assets/globe.png";

import "./Card.scss";

const Card = ({ image, title, liveLink, gitLink, techStack }) => {
  return (
    <div className="card-container">
      {image && <img src={image} alt="card image" className="card-img" />}
      {title}
      {!!liveLink?.length && (
        <>
          <div className="divider"></div>
          <div className="card-link-container">
            <div
              className="link-item"
              onClick={() => window.open(gitLink, "_blank")}
            >
              <img src={Github} alt="" />
              <p>Github</p>
            </div>
            <div
              className="link-item"
              onClick={() => window.open(liveLink, "_blank")}
            >
              <img src={Globe} alt="" />
              <p>Live</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-tech-stack">
            {techStack?.map((tech, i) => (
              <img key={i} src={tech} className="tech-img" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
