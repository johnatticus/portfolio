import React from "react";
import "./modal.css";

const ProjectModal = ({ setIsOpen, ...item }) => {
    return (
      <>
        <div className="project-modal" onClick={() => setIsOpen(false)}>
            <div className="project-modal-content">
            <div className="project-modal-header">

                <p>{item.title}</p>
                <div className="modal-max-min">
                  <div className="modal-header-square" onClick={() => setIsOpen(false)}><p>_</p></div>
                  <div className="modal-header-square" onClick={() => setIsOpen(false)}><p>&#9744;</p></div>
                  <div className="modal-header-square" onClick={() => setIsOpen(false)}>x</div>
                {/* <span className="close" onClick={() => setIsOpen(false)}>&times;</span> */}
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




// import { RxDash } from "react-icons/rx";
// import { RxSquare } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";