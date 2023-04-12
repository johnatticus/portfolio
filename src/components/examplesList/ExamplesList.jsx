import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import "./examplesList.css";
import Examples from "../examples/Examples"
import { projects } from "../../data";
import Nav from "../nav/Nav";

export const ProjectList = () => {
  const [projectModal, setProjectModal] = useState(null);
  const showModal = (item) => setProjectModal(item);
  const hideModal = () => setProjectModal(null);

  return (
    <>
    <Nav />
    <div className="pl">
      {projectModal && (
        <MyModal show={projectModal} item={projectModal} onClose={hideModal} />
      )}
      <div className="pl-list">
        {projects.map((item, key) => (
          <Examples onClick={() => showModal(projects[item])} key={key} img={item.img} link={item.link} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
    </>
  );
};

function MyModal({ show, item, onClose }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby={`contained-modal-title-${item.id}`}
      centered
    >
      <Modal.Header 
        closeButton
        className="special-modal">
        <Modal.Title id={`contained-modal-title-${item.id}`}>
          {item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{item.description}</Modal.Body>
    </Modal>
  );
}

console.log(projects);
export default ProjectList;
