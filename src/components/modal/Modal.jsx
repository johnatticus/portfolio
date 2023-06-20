import React from "react";
import "./modal.css";

const ProjectModal = ({ setIsOpen, ...item }) => {
  const techUsed = {...item.tech}
  console.log(techUsed)
  return (
    <>
      <div className="project-modal" onClick={() => setIsOpen(false)}>
        <div className="project-modal-content">
          <div className="project-modal-header">
            <p>{item.title}</p>
            <div className="modal-max-min">
              <div
                className="modal-header-square"
                onClick={() => setIsOpen(false)}
              ></div>
              <div
                className="modal-header-square"
                onClick={() => setIsOpen(false)}
              ></div>
              <div
                className="modal-header-square"
                onClick={() => setIsOpen(false)}
              ></div>
            </div>
          </div>
          <div className="project-modal-body">
            <p>{item.description}</p>
            <p><strong>tech used:</strong></p>
            <p>{item.tech}</p>
            <p><a href={item.link} target="blank">repo</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
