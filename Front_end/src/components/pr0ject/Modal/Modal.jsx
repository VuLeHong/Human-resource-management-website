import React, { useState } from "react";
import "./Modal.css";
import {} from "react-icons"

import axios from 'axios'
const Modal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState();
  const [Desc, setDesc] = useState();
  const toggleModal = () => {
    setModal(!modal);
  };
  const auth = localStorage.getItem("user");
  const auth1 = JSON.parse(auth);

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
        Open
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="title-project">
                <h2>Create Project</h2>
                <button className="close-modal" onClick={toggleModal}>
                CLOSE
                </button>
            </div>
            <form onSubmit={handleAdd}>
                <div className="name-project">
                    <p className="text-label" htmlFor="">Name:</p>
                    <input type="text" placeholder="Name of project" onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div className="desc-project">
                    <label className="text-label" htmlFor="">Description:</label>
                    <input type="text" placeholder="Desciption" onChange={ (e) => setDesc(e.target.value)} />
                </div>
                <div className="create-project">
                    <button type ="submit">Create project</button>
                </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Modal