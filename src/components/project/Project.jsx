import Folder from "../../img/projects.png";
import { Link } from "react-router-dom";
import "./project.css";
// import React from 'react'

const Project = ({ id, img, link, title, description }) => {
  return (
    <>
      <div className="project-grid-item">
        <Link to={`/project/${id}`}>
          <img src={Folder}></img>
        <div className="project-text">
          <span>{title}</span>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Project;
