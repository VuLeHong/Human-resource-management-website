import React, { useState } from "react";
import "./Checkdone-modal.css";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"

const Checkdone_modal = (data) => {
  const [modal, setModal] = useState(false);
  const [Organization, setOrganization] = useState();
  const [Technology, setTechnology] = useState();
  const [Idea, setIdea] = useState();
  const [Communication, setCommunication] = useState();
  const [Product, setProduct] = useState();
  const toggleModal = () => {
    setModal(!modal);
  };

  const [check, setCheck] = useState(false)
  const toggleCheck = () => {
    setCheck(!check)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const handleAdd = () => {
    axios.post('http://localhost:5000/upscore', {content:content, rank:rank, Project_id: data.project_id, user_id:user_id})
    .then(result=> {
      if(result){
        location.reload()
      }
    })
    .catch(err => console.log(err))
}
  return (
    <>
      <button onClick={toggleModal} className="btn-modalcheck">
        Check Done
        </button>

      {modal && (
        <div className="modalcheck">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="check-content">
            <div className="title-check">
                <h2>Task</h2>
            </div>
            <div className="content-task-project">
                <h3>Content of the task: {data.content}</h3>
                <h3>Rank of the task: {data.rank}</h3>
                <h3>Score: 10</h3>
            </div>
            <form onSubmit={handleAdd}>
                <div className="content-plus-points">
                    <h3>Which skills do you want to add?</h3>
                </div>
                <div className="plusploint-form">
                    <div className="plus">
                        <label htmlFor="">Organization skill:</label>
                        <input type="text"onChange={ (e) => setOrganization(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Technology skill:</label>
                        <input type="text" onChange={ (e) => setTechnology(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Idea contribution:</label>
                        <input type="text" onChange={ (e) => setIdea(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Communication skill:</label>
                        <input type="text" onChange={ (e) => setCommunication(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Product optimization:</label>
                        <input type="text" onChange={ (e) => setProduct(e.target.value)} required />
                    </div>
                </div>
            </form>
            <div className="btn-check">
                <h3>isDone?</h3>
                <button onClick={toggleCheck}>
                    {check ? <MdCheckBoxOutlineBlank className="tick" /> : <MdCheckBox className="non-tick" />}
                </button>
            </div>
            <div className="create-project">
                <button className="create-project1" type="submit">Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkdone_modal