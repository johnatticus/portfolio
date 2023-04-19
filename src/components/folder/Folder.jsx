import FolderIcon from "../../img/projects_closed.png";
import { Link } from "react-router-dom";
import "./folder.css";
// import React from 'react'

const Folder = ({ id, img, link, title, description }) => {

  return (
    <>
      <div className="project-grid-item">
        <Link to={`/projects/${id}`}>
          <img src={FolderIcon}></img>
        <div className="project-text">
          <span>{title}</span>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Folder;
