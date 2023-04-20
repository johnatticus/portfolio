import { Link } from "react-router-dom";
import "./window.css";
// import React from 'react'

const Window = ({ id, img, link, title, description }) => {

  return (
    <>
      <div className='window-container'>
      <div className='window-window'>
        <div className="window-browser-bar">
          <p>{title}</p>
            <div className="window-max-min">
              <div className="window-circle-r"></div>
              <div className="window-circle-y"></div>
              <div className="window-circle-g"></div>
            </div>
        </div>
        <div className="window-content">
            <img src={img}></img>
            {link}
            <br></br>
            {description}
        </div>
      </div>
    </div>
    </>
  );
};

export default Window;