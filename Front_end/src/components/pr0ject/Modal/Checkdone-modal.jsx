import React, { useState } from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import "./Checkdone-modal.css"

const Checkdone_modal = () => {
    const [check, isCheck] = useState(false)
    const [modal, setModal] = useState(false)
    const toggleModalCheck = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModalCheck} className="btn-modalcheck">
                <i class="icon"><TiPlus /></i>
                OPEN
            </button>

            {modal && (
                <div className="modalcheck">
                    <div className="overlay"></div>
                    <div className="modalcheck-content">
                        <div className="content-check">
                            <p>Task: Do CSS</p>
                            <p>Rank: C</p>
                            <p>Points: 10</p>
                        </div>
                        <form action="">
                            <div className="points">
                                <label htmlFor="">Organization skill:</label>
                                <input type="number" />
                            </div>
                            <div className="points">
                                <label htmlFor="">Technology skill:</label>
                                <input type="number" />
                            </div>
                            <div className="points">
                                <label htmlFor="">Idea contribution:</label>
                                <input type="number" />
                            </div>
                            <div className="points">
                                <label htmlFor="">Communication skill:</label>
                                <input type="number" />
                            </div>
                            <div className="points">
                                <label htmlFor="">Product optimization:</label>
                                <input type="number" />
                            </div>
                        </form>
                        {check === false ? (
                            <></>
                        ) : (
                            <></>
                        )
                        }
                        <button type="submit">Submit</button>
                    </div>
                </div>
            )}
        </>
    )

}

export default Checkdone_modal