import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNodeJs,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faTerminal, faCogs } from "@fortawesome/free-solid-svg-icons";

import TailwindCSS from "../assets/tailwind.png";
import Webpack from "../assets/webpack.png";
import Babel from "../assets/babel.png";
import Firebase from "../assets/firebase.png";
import Heroku from "../assets/heroku.png";
import Netlify from "../assets/netlify.png";
import MongoDB from "../assets/mongo.png";
import Inkscape from "../assets/inkscape.png";
import AdobeXD from "../assets/adobexd.png";
import Figma from "../assets/figma.png";
import Jwt from "../assets/jwt.png";

import "./Technology.scss";

const techObjects = [
  {
    id: 1,
    category: "client",
    icon: faHtml5,
  },
  {
    id: 2,
    category: "client",
    icon: faCss3,
  },
  {
    id: 3,
    category: "client",
    icon: faSass,
  },
  {
    id: 4,
    category: "client",
    icon: faJs,
  },
  {
    id: 5,
    category: "client",
    icon: faReact,
  },
  {
    id: 6,
    category: "server",
    icon: { ...faNodeJs, iconName: "Node.js/Express" },
  },
  {
    id: 7,
    category: "server",
    icon: { ...faCogs, iconName: "Rest API" },
  },
  {
    id: 8,
    category: "tools",
    icon: faGit,
  },
  {
    id: 9,
    category: "tools",
    icon: faGithub,
  },
  {
    id: 10,
    category: "tools",
    icon: faTerminal,
  },
  {
    id: 11,
    category: "client",
    icon: TailwindCSS,
    name: "Tailwind CSS",
  },
  {
    id: 12,
    category: "tools",
    icon: Webpack,
    name: "Webpack",
  },
  {
    id: 13,
    category: "tools",
    icon: Babel,
    name: "Babel",
  },
  {
    id: 14,
    category: "database",
    icon: Firebase,
    name: "Firebase",
  },
  {
    id: 15,
    category: "database",
    icon: Heroku,
    name: "Heroku",
  },
  {
    id: 16,
    category: "database",
    icon: Netlify,
    name: "Netlify",
  },
  {
    id: 17,
    category: "database",
    icon: MongoDB,
    name: "Mongo DB",
  },
  {
    id: 18,
    category: "design",
    icon: Inkscape,
    name: "Inkscape",
  },
  {
    id: 19,
    category: "design",
    icon: AdobeXD,
    name: "AdobeXD",
  },
  {
    id: 20,
    category: "design",
    icon: Figma,
    name: "Figma",
  },
  {
    id: 21,
    category: "server",
    icon: Jwt,
    name: "Jwt",
  },
];

const Technology = () => {
  const [filterState, setFilterState] = useState("client");
  const [filteredTechnologies, setFilteredTechnologies] = useState(techObjects);
  useEffect(() => {
    if (filterState === "all") return setFilteredTechnologies(techObjects);
    setFilteredTechnologies(
      techObjects.filter((item) => item.category === filterState)
    );
  }, [filterState]);
  return (
    <div className="technology-container">
      <div className="technology-container-wrapper">
        <h2>I have experience with...</h2>
        <div className="technology-container-filter">
          <ul>
            <li
              className={filterState === "all" ? "active-link" : ""}
              onClick={() => setFilterState("all")}
            >
              All
            </li>
            <li
              className={filterState === "client" ? "active-link" : ""}
              onClick={() => setFilterState("client")}
            >
              Client
            </li>
            <li
              className={filterState === "server" ? "active-link" : ""}
              onClick={() => setFilterState("server")}
            >
              Server
            </li>
            <li
              className={filterState === "tools" ? "active-link" : ""}
              onClick={() => setFilterState("tools")}
            >
              Tools
            </li>
            <li
              className={filterState === "database" ? "active-link" : ""}
              onClick={() => setFilterState("database")}
            >
              Cloud
            </li>
            <li
              className={filterState === "design" ? "active-link" : ""}
              onClick={() => setFilterState("design")}
            >
              Design
            </li>
          </ul>
        </div>
        <div className="technology-container-items">
          {filteredTechnologies.map((item) => (
            <div
              className="technology-item"
              key={item.icon.iconName || item.name}
            >
              <h2>{item.icon.iconName || item.name}</h2>
              {item.id < 11 ? (
                <FontAwesomeIcon icon={item.icon} color="white" size="5x" />
              ) : (
                <img src={item.icon} alt="" size="5x" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
