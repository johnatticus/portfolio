import FolderIcon from "../../img/projects_closed.png";
import { Link } from "react-router-dom";
import "./folder.css";
// import React from 'react'

const Folder = ({ ...item }) => {

  return (
    <>
      <div className="project-grid-item">
        <Link to={`/projects/${item.id}`}>
          <img src={FolderIcon}></img>
        <div className="project-text">
          <span>{item.title}</span>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Folder;
