import "./Footer.scss";

import Linkedin from "../../assets/Linkedin.png";
import Twitter from "../../assets/twitter.png";
import Envelope from "../../assets/envelope.png";
import Github from "../../assets/github.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials">
        <a href="#" target="_blank">
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="#" target="_blank">
          <img src={Twitter} alt="twitter" />
        </a>
        <a href="mailto: Ivanmilovac54321@gmail.com" target="_blank">
          <img src={Envelope} alt="envelope" />
        </a>
        <a href="#" target="_blank">
          <img src={Github} alt="github" />
        </a>
      </div>
      <div>&copy; Copyright 2022.</div>
    </div>
  );
};

export default Footer;
