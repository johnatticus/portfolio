import React from "react";
import "./modal.css";
import { AiOutlineClose, AiOutlineBorder, AiOutlineLine } from 'react-icons/ai';

const ProjectModal = ({ setIsOpen, ...item }) => {
  const techUsed = {...item.tech}
  console.log(techUsed)
  return (
    <>
      <div className="project-modal">
        <div className="project-modal-content">
          <div className="project-modal-header">
            <p>{item.title}</p>
            <div className="modal-max-min">
              {/* <div
                className="modal-header-square"
                onClick={() => setIsOpen(false)}
              ><AiOutlineLine /></div>
              <div
                className="modal-header-square"
                onClick={() => setIsOpen(false)}
              ><AiOutlineBorder /></div> */}
              <div
                className="modal-header-square"
                onClick={() => setIsOpen(false)}
              ><AiOutlineClose /></div>
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
