import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "./shared/Card.jsx";

import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import ECom from "../assets/ecom-snip.PNG";
import CRMSnip from "../assets/CRM-snip.PNG";
import CountrySnip from "../assets/Country-snip.PNG";
import PortfolioSnip from "../assets/Portfolio-snip.PNG";
import MUI from "../assets/mui.png";
import TS from "../assets/typescript.png";
import reactIcon from "../assets/react.png";
import sass from "../assets/sass.png";
import Webpack from "../assets/webpack.png";
import Babel from "../assets/babel.png";

import "./Work.scss";

const Work = () => {
  return (
    <div className="work-container">
      <Card
        title={<h3 className="card-title">EComm App</h3>}
        gitLink="https://github.com/IvanMilovac/react-ts-ecommerce"
        liveLink="https://e-com-im.web.app/"
        image={ECom}
        techStack={[reactIcon, MUI, TS]}
      />
      <Card
        title={<h3 className="card-title">Countries App</h3>}
        gitLink="https://github.com/IvanMilovac/react-ts-countries-info"
        liveLink="https://countries-ts-app.web.app/"
        image={CountrySnip}
        techStack={[reactIcon, MUI, TS]}
      />
      <Card
        title={<h3 className="card-title">CRM App</h3>}
        gitLink="https://github.com/IvanMilovac/react-crm-ts"
        liveLink="https://crm-project-im.web.app/login"
        image={CRMSnip}
        techStack={[reactIcon, MUI]}
      />
      <Card
        title={<h3 className="card-title">Personal portfolio page</h3>}
        gitLink="https://github.com/IvanMilovac/personal-portfolio-page"
        liveLink="https://ivan-milovac.web.app/"
        image={PortfolioSnip}
        techStack={[reactIcon, sass, Webpack, Babel]}
      />
      <Card
        title={
          <h3 className="card-title">
            <a href="https://github.com/IvanMilovac" target="_blank">
              Other projects are on my Github account{" "}
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </a>
          </h3>
        }
      />
    </div>
  );
};

export default Work;
