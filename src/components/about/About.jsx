import React from "react";
import "./about.css";
// import BigCode from "../../img/bigcode.jpg";
// import SmallCode from "../../img/smallcode.jpg";
import Me from "../../img/me2.jpg"
import Nav from "../nav/Nav";

const About = () => {
  return (
    <>
    <Nav />
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Currently finishing up education to become a full stack web developer. Located in South Florida.
        </p>
        <p className="a-desc">
        Working in HTML, CSS, Javascript, Node.js, APIs, MySQL, MongoDB, React.js and more.
        </p>
        <p className="a-desc">
        Previous experience working in print design/layout and Bluetooth Protocol testing.
        </p>
    
      </div>
    </div>
    </>
  );
};

export default About;
