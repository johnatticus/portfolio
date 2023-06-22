import "./contact.css";
// import Phone from "../../img/phone.png";
import Quizgame from "../../img/quizgame.png";
import SN from "../../img/socialnetwork.png";
import Eats from "../../img/economiceats.png"
import Folder from "../../img/folder_closed.png"
import { useContext, useRef, useState } from "react";
import Nav from "../../components/nav/Nav";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  return (
    <>
    <div className='projects-container'>
      <div className='projects-window'>
        <div className="projects-browser-bar">
          <p>contact</p>
            <div className="projects-max-min">
              <div className="projects-circle-r"></div>
              <div className="projects-circle-y"></div>
              <div className="projects-circle-g"></div>
            </div>
        </div>
        
        <div>
          CONTACT FORM HERE
        </div>
        
      </div>
    </div>
    </>

  );
};

export default Contact;
