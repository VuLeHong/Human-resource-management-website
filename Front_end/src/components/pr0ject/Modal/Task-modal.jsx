
import React, { useState } from "react";
import "./Task-modal.css";
import {} from "react-icons"
import { IoMdClose } from "react-icons/io";


const Task_modal = (props) => {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState();
  const [rank, setRank] = useState();
  const [user_id, setUser_id] = useState();
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const handleAdd = () => {
    axios.post('http://localhost:5000/project', {content:content, rank:rank, Project_id: props.data, user_id:user_id})
    .then( result=> {
      if(result){
        location.reload()
      }
    })
    .catch(err => console.log(err))
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
                    <input type="text" placeholder="Name of project" onChange={ (e) => setContent(e.target.value)} required />
                </div>
                <div className="desc-project">
                    <label className="text-label" htmlFor="">Rank :</label>
                    <input type="text" placeholder="Rank" onChange={ (e) => setRank(e.target.value)} required/>
                </div>

                <div className="desc-project">
                    <label className="text-label" htmlFor="">User-id task  :</label>
                    <input type="text" placeholder="User-id task" onChange={ (e) => setUser_id(e.target.value)} required />
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