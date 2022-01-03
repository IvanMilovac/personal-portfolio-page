import React from "react";

import "./Contact.scss";
import Socials from "./shared/Socials.jsx";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-container-content">
        <h2>Contact me via...</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
