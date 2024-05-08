import React, { useState } from "react";
import "./Modal.css";
import {} from "react-icons"
import { IoMdClose } from "react-icons/io";


const Modal = () => {
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
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="title-project">
                <h2>Create Project</h2>
                <button className="close-modal" onClick={toggleModal}>
                <IoMdClose />
                </button>
            </div>
            <form className="form-create" action="">
                <div className="name-project">
                    <p className="text-label" htmlFor="">Name :</p>
                    <input type="text" placeholder=" Name of project" name="" id="" required />
                </div>
                <div className="desc-project">
                    <label className="text-label" htmlFor="">Description :</label>
                    <input className="Desc-table" type="text" placeholder=" Desciption..." id="" required />
                </div>
                <div className="create-project">
                    <button className="create-project1">Create project</button>
                </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Modal