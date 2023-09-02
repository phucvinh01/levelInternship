import React, { memo } from 'react'
import { Button } from 'react-bootstrap'

const FormTodo = ({ setNewTodo, inputRef, newTodo, update, handleDoneUpdate, handleInsert }) => {
    console.log("re-render-form");
    return (
        <>
            <div className='d-flex'>
                <div className="form-floating w-100">
                    <input ref={ inputRef } value={ newTodo } type="text" className="form-control" id="floatingInput" placeholder="Todo for day?"
                        onChange={ (e) => setNewTodo(e.target.value) }
                    ></input>
                    <label htmlFor="floatingInput">Todo for day?</label>
                </div>
                {
                    update ? <Button disabled={ newTodo ? false : true }
                        className='btn btn-success m-0' onClick={ handleDoneUpdate }><i className="fa-regular fa-pen-to-square text-white fs-2"></i></Button> : <Button disabled={ newTodo ? false : true }
                            className='btn btn-success m-0' onClick={ handleInsert }><i className="fa-solid fa-circle-plus text-white fs-2"></i></Button>
                }

            </div>
        </>
    )
}

export default memo(FormTodo)