import React from 'react'
import { Card } from 'react-bootstrap'

const Todo = (props) => {

    const { item, index, idUpdate, update, handleUpdate, handleDelete, handleDone } = props

    return (
        <>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className={ item.status ? "done" : "" }>
                    <Card className={ item.id === idUpdate & update ? " todo my-3 p-3 active" : "todo my-3 p-3" } style={ { width: "15rem" } }>
                        <div className='card-title d-flex justify-content-between align-item-center'>
                            <p className='p-0'>{ +index + 1 }</p>
                            <div className='text-end p-0 option'>
                                <button onClick={ () => handleUpdate(item) }><i className="fa-regular fa-pen-to-square mx-2"></i></button>
                                <button onClick={ () => handleDelete(item.id) }> <i className="fa-solid fa-trash mx-2"></i></button>
                                <button onClick={ () => handleDone(item.id) }> <i className="fa-regular fa-square-check"></i></button>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='card-body'><strong>{ item.title }</strong></div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Todo