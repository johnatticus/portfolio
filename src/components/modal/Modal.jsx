import React from "react";
import "./modal.css";

const ProjectModal = ({ setIsOpen, ...item }) => {
    return (
      <>
        <div id="myModal" className="project-modal" onClick={() => setIsOpen(false)}>
            <div className="project-modal-content">
            <div className="project-modal-header">

                <p>{item.title}</p>
                <div className="modal-max-min">
                <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                </div>
            </div>
            <div className="project-modal-body">
                <p>{item.description}</p>
                <p>Some other text...</p>
            </div>
            </div>

            </div>
      </>
    );
  };
  
  export default ProjectModal;