import React, { useState } from 'react'
// import { Modal } from "react-bootstrap";
import "./projects.css";
// import Examples from "../../components/examples/Examples"
import Folder from "../../components/folder/Folder"
import { projects } from "../../data";
import Nav from "../../components/nav/Nav";

export const ProjectList = () => {
  return (
    <>
    <Nav />
    <div className='projects-container'>
      <div className='projects-window'>
        <div className="projects-browser-bar">
          <p>projects</p>
            <div className="projects-max-min">
              <div className="projects-circle-r"></div>
              <div className="projects-circle-y"></div>
              <div className="projects-circle-g"></div>
            </div>
        </div>
        <div className="projects-grid-container">
          {projects.map((item) => (
            <Folder
            {...item}
              // key={key}
              // id={item.id}
              // img={item.img}
              // link={item.link}
              // title={item.title}
              // description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

console.log(projects);
export default ProjectList;