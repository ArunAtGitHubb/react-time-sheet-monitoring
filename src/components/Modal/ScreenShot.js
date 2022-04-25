import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

const ScreenShot = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            View
        </Button>

        <Modal show={show} onHide={handleClose} backdrop='static' centered size='lg'>
            <Modal.Header className='bg-success'>
                <h3>Develop the mockup</h3>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default ScreenShot