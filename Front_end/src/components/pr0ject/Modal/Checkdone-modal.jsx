import React, { useEffect, useState } from 'react' 
import "./Checkdone-modal.css";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"
import axios from 'axios'
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
  const [owner, setOwner] = useState({});
  useEffect(() => {
   axios.post('http://localhost:5000/get', {user_id: data.user_id}) 
   .then(result => {
           setOwner(result.data)
   })
   .catch(err => console.log(err))
 },[])
  const handleAdd = () => {
    if(check===false){
      axios.post('http://localhost:5000/upscore', {
        user_id: data.user_id,
        organizational_up: Organization, 
        techical_up: Technology,
        idea_up: Idea,
        communication_up: Communication,
        product_up: Product,
        organizational_skill: owner.stats.organizational_skill,
        techical_skill: owner.stats.techical_skill,
        idea_contribution: owner.stats.idea_contribution,
        communication_skill: owner.stats.communication_skill,
        product_optimization: owner.stats.product_optimization
      })
      .then(result=> {
        if(result){
          location.reload()
        }
      })
      .catch(err => console.log(err))
      axios.post('http://localhost:5000/updone', {task_id: data.task_id})
       .then(result=> {
         if(result){
           location.reload()
         }
       })
       .catch(err => console.log(err))
    }
    else{
      alert("please check done")
    }
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
                        <input type="number"onChange={ (e) => setOrganization(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Technology skill:</label>
                        <input type="number" onChange={ (e) => setTechnology(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Idea contribution:</label>
                        <input type="number" onChange={ (e) => setIdea(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Communication skill:</label>
                        <input type="number" onChange={ (e) => setCommunication(e.target.value)} required />
                    </div>
                    <div className="plus">
                        <label htmlFor="">Product optimization:</label>
                        <input type="number" onChange={ (e) => setProduct(e.target.value)} required />
                    </div>
                </div>
                <div className="btn-check">
                <h3>isDone?</h3>
                <button onClick={toggleCheck}>
                    {check===false ? <MdCheckBoxOutlineBlank className="tick" /> : <MdCheckBox className="non-tick" />}
                </button>
            </div>
            <div className="create-project">
                <button className="create-project1" type="submit">Submit</button>
            </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Checkdone_modal