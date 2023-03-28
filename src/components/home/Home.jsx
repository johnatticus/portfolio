import React from "react";
import "./home.css";
import Folder from "../../img/folder_closed.png";
import About from "../../img/about.png";
import Projects from "../../img/projects.png";
import Contact from "../../img/contact.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="landing">
      <div className="grid-container">
        <div className="grid-item item1">
          <Link to="/about"><img src={About}></img></Link>
          <p><span>About</span></p>
        </div>
        <div className="grid-item item2">
          <Link to="/projects"><img src={Projects}></img></Link>
          <p><span>Projects</span></p>
        </div>
        <div className="grid-item item3">
          <Link to="/contact"><img src={Contact}></img></Link>
          <p><span>Contact</span></p>
        </div>
      </div>


</div>
      {/* <div className="landing">
        <Link to="/about">
          <div className="folder"></div>
        </Link>
        <Link to="/projects">
          <div className="folder"></div>
        </Link>
        <Link to="/contact">
          <div className="folder"></div>
        </Link>

        <div className="text">About</div>
        <div className="text">Projects</div>
        <div className="text">Contact</div>
      </div> */}
    </>
  );
};

export default Home;
