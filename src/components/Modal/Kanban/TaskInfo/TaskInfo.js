import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ScreenShot from '../../ScreenShot'
import Spinner from '../../../Spinner/Spinner'

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

    let [data, setData] = useState([])
    let [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        let taskId = props.taskId
        let url = process.env.REACT_APP_HOST + `/api.php?require=work&taskid=${taskId}`
        axios.get(url).then(({data}) => {
            setData(data)
            setLoad(false)
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
                    {load && <Spinner />}
                    {data.constructor === Array ? data.map((task, idx) => {
                        console.log("work length", task.works.length)
                        return <>
                            <Header header={task.userName}/>
                            <tbody style={{ textAlign: "center" }}>
                                {task.works.map((work, idx) => {
                                    return <tr key={idx}>
                                        <td>{work.Date}</td>
                                        <td>{work.Duration}</td>
                                        <td>{work.Description}</td>
                                        <td>
                                            <ScreenShot reqId={props.taskId}/>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </>
                    }) : <h2>No tasks</h2>}
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