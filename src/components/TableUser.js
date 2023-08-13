import React, { useEffect, useState } from 'react'
import { getAllUser } from './API/UserAPI'
import Table from 'react-bootstrap/Table';
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Modal from './Modal'
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
const TableUser = () => {
    const [listUser, setListUser] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [stateEdit, setStateEdit] = useState("")

    const [show, setShow] = useState(false);

    const [showEdit, setShowEdit] = useState(false);
    const [showDel, setShowDel] = useState(false);

    const handleClose = (action) => {
        switch (action) {
            case "ADD":
                setShow(false)
                break
            case 'EDIT':
                setShowEdit(false)
                break
            case "DEL":
                setShowDel(false)
                break
        }
    };
    const handleShow = (action) => {
        switch (action) {
            case "ADD":
                setShow(true)
                break

            case 'EDIT':
                setShowEdit(true)
                break
            case "DEL":
                setShowDel(true)
                break

        }
    };

    useEffect(() => {
        getListUser(1)
    }, [])

    const handbleUpdateTableUser = (user) => {
        setListUser([user, ...listUser]);
    }

    const handleEdit = (id, res) => {
        let clone = [...listUser]
        console.log(clone);
        let index = clone.findIndex(item => item.id === id)
        console.log(res);
        clone[index].first_name = res.firstName
        clone[index].last_name = res.lastName
        clone[index].email = res.email
        clone[index].avatar = res.avatar
        console.log(id, clone);
        setListUser(clone)
        handleClose("EDIT")
    }

    const handleDel = (id) => {
        let clone = [...listUser]
        let index = clone.filter(item => item.id != id)
        setListUser(index)
        handleClose("DEL")

    }

    const getListUser = async (page) => {
        let res = await getAllUser(page)
        if (res && res.data) {
            setListUser(res.data)
            setTotalPages(res.total_pages)
        }

    }
    const handlePageClick = (event) => {
        getListUser(+event.selected + 1)

    }
    return (
        <>
            <Modal
                handbleUpdateTableUser={ handbleUpdateTableUser }
                title="Add new"
                show={ show }
                handleClose={ () => handleClose("ADD") }
            />
            <ModalEdit
                handleEdit={ handleEdit }
                stateEdit={ stateEdit }
                title="Edit"
                show={ showEdit }
                handleClose={ () => handleClose("EDIT") }
            >
            </ModalEdit>
            <ModalDelete
                handleDel={ handleDel }
                stateEdit={ stateEdit }
                title="Delete"
                show={ showDel }
                handleClose={ () => handleClose("DEL") }
            >

            </ModalDelete>
            <div className='d-flex justify-content-between py-4'>
                <p>List: </p>
                <button onClick={ () => handleShow("ADD") } className='btn btn-success'>Add</button>
            </div>
            <Table striped bordered hover className='my-3'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser && listUser.length > 0 && listUser.map((item, index) => {
                            return (
                                <tr key={ `user-${index}` }>
                                    <td>{ item.id }</td>
                                    <td>{ item.email }</td>
                                    <td>{ item.first_name }</td>
                                    <td>{ item.last_name }</td>
                                    <td> <img style={ { width: '60px', height: '60px' } } src={ item.avatar }></img></td>
                                    <td>
                                        <div className='d-flex gap-1'>
                                            <button
                                                className='btn btn-outline-danger'
                                                onClick={ () => {
                                                    handleShow("DEL", item)
                                                    setStateEdit(item)
                                                } }
                                            >
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button className='btn btn-outline-warning'
                                                onClick={ () => {
                                                    handleShow("EDIT", item)
                                                    setStateEdit(item)
                                                } }
                                            >
                                                <i className="fa-regular fa-pen-to-square"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <ReactPaginate
                nextLabel={ <FaAngleRight /> }
                onPageChange={ handlePageClick }
                pageRangeDisplayed={ 3 }
                marginPagesDisplayed={ 2 }
                pageCount={ totalPages }
                previousLabel={ <FaAngleLeft /> }
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={ null }
            />
        </>
    )
}

export default TableUser