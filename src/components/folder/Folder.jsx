import FolderIcon from "../../img/projects_closed.png";
// import { Link } from "react-router-dom";
import "./folder.css";
import ProjectModal from "../modal/Modal"
import React, { useState } from 'react'

const Folder = ({ ...item }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="project-grid-item">
        {/* <Link to={`/projects/${item.id}`}> */}
          <img src={FolderIcon} onClick={() => setIsOpen(true)} alt="folder"></img>
        <div className="project-text">
          <span>{item.title}</span>
        </div>
        {/* </Link> */}
      </div>
      {isOpen && <ProjectModal setIsOpen={setIsOpen} {...item}/>}
    </>
  );
};

export default Folder;
