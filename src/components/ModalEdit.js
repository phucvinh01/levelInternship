import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putUpdateUser } from '../API/UserAPI';
import { toast } from 'react-toastify';

function ModalEdit(props) {


    const { title, handleClose, show, stateEdit, handleEdit } = props

    //console.log(stateEdit);

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
        setEmail(stateEdit.email)
        setFirstName(stateEdit.first_name)
        setLastName(stateEdit.last_name)
        setImage(stateEdit.avatar)
    }, [stateEdit])



    const handleSubmit = async () => {

        let res = await putUpdateUser(stateEdit.id, firstName, lastName, email, image)
        console.log(res);
        if (res.updatedAt) {
            toast.info("Update successful")
            handleEdit(stateEdit.id, res)
        }
        else {
            toast.error("Update fail...")
        }

        //handleClose()

    }
    return (
        <>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <label htmlFor='firstName'>Frist Name</label>
                        <input
                            type='text'
                            required
                            value={ firstName }
                            name="firstName"
                            className='form-control'
                            onChange={ (e) => setFirstName(e.target.value) }
                        ></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            type='text'
                            required
                            value={ lastName }
                            name="lastName"
                            className='form-control'
                            onChange={ (e) => setLastName(e.target.value) }
                        ></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={ (e) => setEmail(e.target.value) }
                            type='email'
                            required
                            value={ email }
                            name="email"
                            className='form-control'

                        ></input>
                    </div>
                    <div className='mb-3'>

                        { image && <div><img src={ image } alt='img' style={ { width: '60px', height: '60px' } }></img></div> }
                        <label htmlFor='email'>Avatar (URL)</label>
                        <input
                            type='text'
                            required
                            value={ image }
                            name="img"
                            className='form-control'
                            onChange={ (e) => setImage(e.target.value) }
                        ></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ handleSubmit }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit;