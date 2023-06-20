// import React from 'react'
import { Link } from "react-router-dom";
import Art from "../../img/art.png";
import About from "../../img/about.png";
import Projects from "../../img/projects.png";
import Contact from "../../img/contact.png";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-grid-top">
      <div className="nav-header">
        <span>John Atticus Hysong</span>
      </div>
      <div className="nav-grid-container">
        <div className="nav-grid-item nav-item1">
          <Link to="/about">
            <img src={About}></img>
          </Link>
          <div className="nav-text">
            <span>About</span>
          </div>
        </div>
        <div className="nav-grid-item nav-item2">
          <Link to="/projects">
            <img src={Projects}></img>
          </Link>
          <div className="nav-text">
            <span>Projects</span>
          </div>
        </div>
        <div className="nav-grid-item nav-item3">
          <Link to="/art">
            <img src={Art}></img>
          </Link>
          <div className="nav-text">
            <span>Art</span>
          </div>
        </div>
        <div className="nav-grid-item nav-item4">
          <Link to="/contact">
            <img src={Contact}></img>
          </Link>
          <div className="nav-text">
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
