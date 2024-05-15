import React, { useState } from "react";
import "./Modal-rank.css";
import Radar_rank from "./chart/Radar-rank";

const Modal_rank = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-click">
        View Details
        </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="title-project">
                <h2>Vs You</h2>
            </div>
            <div className="radar">
              <Radar_rank />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal_rank