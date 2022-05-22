import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ScreenShot from '../../ScreenShot'

import './TaskInfo.css'

const Header = (props) => {
    return <div className='bg-success w-100'>
        <h3 className='d-flex justify-content-center'>{props.header}</h3>
    </div>
}

const TaskInfo = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dummy = [
        {
        name: "MS",
        tasks: [{
            date: "01-01-2002",
            duration: "10:00:22",
            description: "Develop The Form page"
        }, {
            date: "01-01-2002",
            duration: "10:00:22",
            description: "Develop The Form page"
        }]
    }
    ]

    let [data, setData] = useState([])

    useEffect(() => {
        let taskId = props.taskId
        let url = process.env.REACT_APP_HOST + `/api.php?require=work&taskid=${taskId}`
        axios.get(url).then(({data}) => {
            setData(data)
        }).catch(err => {
        })
    }, [])

    return(
    <React.Fragment key={Math.random()}>
        <Button variant="primary" onClick={handleShow}>
            View
        </Button>

        <Modal show={show} onHide={handleClose} backdrop='static' centered size='lg'>
            <Modal.Header closeButton className='bg-success'>
                <Modal.Title>Sub Tasks</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{
                maxHeight: 'calc(100vh - 210px)',
                overflowY: 'auto'
                }}>
                <table>
                    <thead>
                        <td>Date</td>
                        <td>Duration</td>
                        <td>Description</td>
                        <td>Work History</td>
                    </thead>
                    <tbody>
                        {data.constructor === Array ? data.map((task, idx) => {
                                return <React.Fragment key={idx}>
                                    <tr>
                                        <td>{task.Date}</td>
                                        <td>{task.Duration}</td>
                                        <td>{task.Description}</td>
                                        <td><ScreenShot /></td>
                                    </tr>
                                </React.Fragment>
                            }) : null}
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </React.Fragment>
    )
}

export default TaskInfo