import Linkedin from "../../assets/linkedin2.png";
import Twitter from "../../assets/twitter2.png";
import Envelope from "../../assets/envelope2.png";
import Github from "../../assets/github2.png";

import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/ivan-milovac/" target="_blank">
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a href="https://twitter.com/MilovacIvan" target="_blank">
        <img src={Twitter} alt="twitter" />
      </a>
      <a href="mailto: Ivanmilovac54321@gmail.com" target="_blank">
        <img src={Envelope} alt="envelope" />
      </a>
      <a href="https://github.com/IvanMilovac" target="_blank">
        <img src={Github} alt="github" />
      </a>
    </div>
  );
};

export default Socials;
