import "./examples.css";
// import React from 'react'

const Examples = ({img,link,title,description}) => {
  return (
    <div className="p" data-bs-toggle="modal" data-bs-target="#projectModal">
      <div className="p-browser">
        <p>{title}</p>
          <div className="p-max-min">
            <div className="p-circle-r"></div>
            <div className="p-circle-y"></div>
            <div className="p-circle-g"></div>
          </div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>

{/* <!-- Modal --> */}
<div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="projectModalLabel">{title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...{description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Examples;
