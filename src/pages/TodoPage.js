import React, { useEffect, useRef, useState } from 'react'
import Quotes from '../components/BoxQuotes';
import { toast } from 'react-toastify';
import '../components/Css/TodoItem.css'
import Weather from '../components/Weather';
import Todo from '../components/Todo';
import FormTodo from '../components/FormTodo';

const TodoPage = () => {



    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState();
    const [update, setUpdate] = useState(false);
    const [idUpdate, setIdUpdate] = useState();
    const inputRef = useRef(null);


    const handleInsert = () => {
        if (!newTodo) {
            toast.error("Hmmmm..... what's up ?")
        }
        else {
            let newListTodo = [...todo, {
                id: Math.random(),
                title: newTodo,
                status: false
            }]
            setTodo(newListTodo)
            setNewTodo("")
            setIdUpdate(0)
        }
    }

    const handleDoneUpdate = () => {
        setTodo(todo.map((item) =>
            item.id === idUpdate ?
                ({ ...item, title: newTodo }) : (item)
        ))
        setNewTodo("")
        setUpdate(false)
    }


    const handleUpdate = (item) => {
        console.log(item);
        setUpdate(true)
        setNewTodo(item.title)
        setIdUpdate(item.id)
        inputRef.current.focus();
    }

    const handleDelete = (id) => {
        setTodo(todo.filter((item) => item.id != id))
    }

    const handleDone = (id) => {
        setTodo(
            todo.map((item) =>
                item.id === id ?
                    ({ ...item, status: !item.status }) : (item)
            ))
    }


    return (
        <>
            <main className='container'>
                <h1>Todo of Vinh</h1>
                <div className='container p-3 mb-3'>
                    <Weather />
                </div>
                <div className='row'>
                    <div className='col-lg-7 col-md-12 col-sm-12 p-3'>
                        <FormTodo
                            setNewTodo={ setNewTodo }
                            inputRef={ inputRef }
                            newTodo={ newTodo }
                            update={ update }
                            handleDoneUpdate={ handleDoneUpdate }
                            handleInsert={ handleInsert }
                        />
                        <hr></hr>
                        {
                            todo && todo.length ? "" : "NO TASK TODAY"
                        }
                        <div className='row'>
                            {
                                todo && todo.map((item, index) => <>
                                    <Todo
                                        item={ item }
                                        index={ index }
                                        handleDelete={ handleDelete }
                                        idUpdate={ idUpdate }
                                        update={ update }
                                        handleUpdate={ handleUpdate }
                                        handleDone={ handleDone }
                                    />
                                </>
                                )
                            }
                        </div>

                    </div>
                    <div className='col-lg-5 col-md-12 col-sm-12 p-3'>
                        <Quotes />
                    </div>
                </div>

            </main>
        </>
    )
}

export default TodoPage