import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

import mobileMenu from "../../assets/mobileMenu.png";

const LinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.25rem",
};

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav>
      <ul className={mobileNav ? "show" : ""}>
        <li>
          <NavLink
            to="/"
            style={LinkStyle}
            onClick={() => setMobileNav(false)}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={LinkStyle}
            onClick={() => setMobileNav(false)}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            style={LinkStyle}
            onClick={() => setMobileNav(false)}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            style={LinkStyle}
            onClick={() => setMobileNav(false)}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={LinkStyle}
            onClick={() => setMobileNav(false)}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {mobileNav && <span onClick={() => setMobileNav(false)}>&times;</span>}
      {!mobileNav && (
        <img src={mobileMenu} onClick={() => setMobileNav(true)} alt="" />
      )}
    </nav>
  );
};

export default Navbar;
