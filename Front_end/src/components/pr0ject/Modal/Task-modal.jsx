
import React, { useState } from "react";
import "./Task-modal.css";
import {} from "react-icons"
import { IoMdClose } from "react-icons/io";


const Task_modal = () => {
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
      <button onClick={toggleModal} className="open-button">
        Create Task
      </button>

      <ul className="test">

      <button className="btn1">
      <li>

        <label for="check">DO CSS</label>
        
        <button>Desc</button>

        <input type="checkbox" id="check"></input>

      </li>
      
   
      </button>

      <button className="btn2">
      <li>
        
        <label for="check">DO CSS</label>
        
        <button>Desc</button>

        <input type="checkbox" id="check"></input>

      </li>
      
      </button>
        
        <button className="btn3">
        <li>
        
        <label for="check">DO CSS</label>
        
        <button>Desc</button>

        <input type="checkbox" id="check"></input>

      </li>
      
        </button>

      </ul>

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
            <form action="">
                <div className="name-project">
                    <p className="text-label" htmlFor="">Content :</p>
                    <input type="text" placeholder="Name of project" name="" id="" required />
                </div>
                <div className="desc-project">
                    <label className="text-label" htmlFor="">Rank :</label>
                    <input type="text" placeholder="Rank" name="" id="" required/>
                </div>

                <div className="desc-project">
                    <label className="text-label" htmlFor="">User-id task  :</label>
                    <input type="text" placeholder="User-id task" name="" id="" required />
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

export default Task_modal