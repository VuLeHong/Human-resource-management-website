import React, { useState } from "react";
import "./Modal.css";
import {} from "react-icons"

import axios from 'axios'
import { IoMdClose } from "react-icons/io";
import { TiPlus } from "react-icons/ti";




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

  const handleAdd = () => {
    axios.post('http://localhost:5000/project', {owner_id:auth1.user_id, name: name, desc: Desc})
    .then( result=> {
      if(result){
        location.reload()
      }
    })
    .catch(err => console.log(err))
}

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <i class="icon"><TiPlus /></i>
        OPEN
        </button>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
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