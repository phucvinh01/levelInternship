
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { delUser } from './API/UserAPI';
import { toast } from 'react-toastify';

function ModalDelete(props) {


    const { title, handleClose, show, stateEdit, handleDel } = props

    const handleSubmit = async () => {
        let res = await delUser(stateEdit.id)
        if (res.statusCode === 204) {
            toast.success("Deleled")
            handleDel(stateEdit.id)
        }
        else {
            toast.error("Something errors")
        }
    }
    return (
        <>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h6>Are you sure want delete?</h6>
                        <strong>{ stateEdit.email }</strong>

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

export default ModalDelete;