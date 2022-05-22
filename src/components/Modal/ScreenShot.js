import axios from 'axios';
import React,{ useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

const ScreenShot = (props) => {

    let path = 'http://localhost/time-sheet-backend/demo/screenshots/'
    let [screenShots, setScreenShots] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        let url = process.env.REACT_APP_HOST + `/api.php?require=screen&reqId=${props.reqId}`
        axios.get(url).then(({data}) => {
            setScreenShots(data)
        }).catch(err => {
            console.log(err)
        })
        setShow(true)
    };

    console.log(screenShots)

    return (
        <>
        <Button variant="primary" style={{height: "50px"}} onClick={handleShow}>
            View
        </Button>

        <Modal show={show} onHide={handleClose} backdrop='static' centered size='lg'>
            <Modal.Header className='bg-success'>
                <h3>ScreenShot</h3>
            </Modal.Header>
            <Modal.Body>
                {screenShots.constructor === Array ? screenShots.map(screenShot => {
                    return <img style={{padding: "1rem"}} src={path + screenShot.id + '.jpg'} width="380" alt='not available'/>
                }) : <h1>No ScreenShots Available</h1>}
                
            </Modal.Body>
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