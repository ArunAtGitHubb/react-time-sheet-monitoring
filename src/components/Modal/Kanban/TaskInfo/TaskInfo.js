import React, { useState } from 'react'
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

    const data = [
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
    }, 
        {
        name: "LP",
        tasks: [{
            date: "01-01-2002",
            duration: "10:00:22",
            description: "Develop The Form page"
        }, {
            date: "01-01-2002",
            duration: "10:00:22",
            description: "Develop The Form page"
        }, {
            date: "01-01-2002",
            duration: "10:00:22",
            description: "Develop The Form page"
        }]
    }, 
        {
        name: "LS",
        tasks: [{
            date: "01-01-2002",
            duration: "10:00:22",
            description: "Develop The Form page"
        }, {
            date: "01-01-2002",
            duration: "10:00:22",
            description: "Develop The Form page"
        }]
    }, 
    ]

    return(
    <>
        <Button variant="primary" onClick={handleShow}>
            View
        </Button>

        <Modal show={show} onHide={handleClose} backdrop='static' centered size='lg'>
            <Modal.Header closeButton className='bg-success'>
                <Modal.Title>Tasks</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table>
                    <thead>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Description</th>
                        <th>Work History</th>
                    </thead>
                    <tbody>
                        {data.map(assignee => {
                            return <>
                            <Header header={assignee.name}/>
                            {assignee.tasks.map(task => {
                                return <>
                                    <tr>
                                        <td>{task.date}</td>
                                        <td>{task.duration}</td>
                                        <td>{task.description}</td>
                                        <td><ScreenShot /></td>
                                    </tr>
                                </>
                            })}
                            </>
                        })}
                    </tbody>
                </table>
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

export default TaskInfo