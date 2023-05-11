import { Link } from "react-router-dom";
import "./window.css";
// import React from 'react'

const Window = ({ ...item }) => {

  return (
    <>
      <div className='window-container'>
      <div className='window-window'>
        <div className="window-browser-bar">
          <p>{item.title}</p>
            <div className="window-max-min">
              <div className="window-circle-r"></div>
              <div className="window-circle-y"></div>
              <div className="window-circle-g"></div>
            </div>
        </div>
        <div className="window-content">
            <img src={item.img}></img>
            {item.link}
            <br></br>
            {item.description}
        </div>
      </div>
    </div>
    </>
  );
};

export default Window;