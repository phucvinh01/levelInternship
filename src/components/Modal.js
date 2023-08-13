import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from './API/UserAPI';
import { toast } from 'react-toastify';

function Example(props) {


    const { title, handleClose, show, handbleUpdateTableUser } = props

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")



    const handleSubmit = async () => {
        if (!firstName || !lastName || !email) {
            toast.error("Missing infomation!!")
        }
        else {
            let res = await postCreateUser(firstName, lastName, email)
            if (res && res.id) {
                toast.success("Create uesr successful!");
                handbleUpdateTableUser({ id: res.id, first_name: res.firstName, last_name: res.lastName, email: res.email, avatar: 'https://i.pinimg.com/564x/d7/7e/31/d77e31b4f7c02493d585c8fb34f6d956.jpg' })
            }
            else {
                toast.error("Create user unsuccessful :< , pls again");
            }
        }
        handleClose()

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
                            required
                            name="firstName"
                            className='form-control'
                            onChange={ (e) => setFirstName(e.target.value) }
                        ></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            required
                            name="lastName"
                            className='form-control'
                            onChange={ (e) => setLastName(e.target.value) }
                        ></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            required
                            name="email"
                            className='form-control'
                            onChange={ (e) => setEmail(e.target.value) }
                        ></input>
                    </div>
                    <div className='mb-3'>
                        { image && <img src={ image } alt='img' className='w-100'></img> }
                        <label htmlFor='email'>Avatar (URL)</label>
                        <input
                            type='text'
                            required
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

export default Example;