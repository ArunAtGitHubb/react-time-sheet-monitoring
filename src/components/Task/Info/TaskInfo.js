import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Badge from '../../Badge'
import Card from '../../Card'

import userLogo from '../../../assets/png/user_icon.png'
import calanderLogo from '../../../assets/png/calander_icon.png'
import timerLogo from '../../../assets/png/timer_icon.png'
import TaskInfoModal from "../../Modal/Kanban/TaskInfo/TaskInfo.js"

import './TaskInfo.css'

const TaskInfo = (props) => {

    let [tasks, setTasks] = useState([])

    useEffect(() => {
        let url = process.env.REACT_APP_HOST + `/api.php?require=task&rqstid=${props.id}`
        console.log("getting", url)
        axios.get(url).then(res => {
            console.log(res.data)
            setTasks(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <React.Fragment key={Math.random()}>
            <Card>
                <p className='h5'>{props.request}</p>
                <table className="table table-borderless mt-5">
                    <thead>
                        <tr>
                            <th scope="col"><Badge color="danger" text="Open" /></th>
                            <th scope="col">
                                <img src={userLogo} width="20" alt="not-available" /> Assignee
                            </th>
                            <th scope="col">
                                <img src={calanderLogo} width="20" alt="not-available" /> Due Date
                            </th>
                            <th scope="col">
                                <img src={timerLogo} width="20" alt="not-available" /> Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>{props.assignee}</td>
                            <td>{props.date}</td>
                            <td>{props.duration}</td>
                        </tr>
                    </tbody>
                </table>
            </Card>

            <p className='h5 mt-5'>Sub Task</p>
            <table className="table table-borderless mt-5">
                <tbody>
                    <tr className=''>
                        {tasks.map((task, idx) =>{
                            return(
                                <React.Fragment key={idx}>
                                    <td>{task.task}</td>
                                    <td>
                                        <img src={userLogo} width="20" alt="not-available" /> {task.assignee}
                                    </td>
                                    <td>
                                        <img src={timerLogo} width="20" alt="not-available" />{task.dateRecieved}
                                    </td>
                                    <td >
                                        <Badge text={task.status.msg} color={task.status.color}/>
                                    </td>
                                    <td>
                                        <TaskInfoModal />
                                    </td>
                                </React.Fragment>
                            )
                        })}
                        
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default TaskInfo