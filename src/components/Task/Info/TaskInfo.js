import React from 'react'
import Badge from '../../Badge'
import Card from '../../Card'

import userLogo from '../../../assets/png/user_icon.png'
import calanderLogo from '../../../assets/png/calander_icon.png'
import timerLogo from '../../../assets/png/timer_icon.png'
import TaskInfoModal from "../../Modal/Kanban/TaskInfo/TaskInfo.js"

import './TaskInfo.css'

const TaskInfo = (props) => {
    return (
        <>
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
                                <img src={timerLogo} width="20" alt="not-available" />Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>MS, LS</td>
                            <td>{props.date}</td>
                            <td>{props.duration}</td>
                        </tr>
                    </tbody>
                </table>
            </Card>

            <p className='h5 mt-5'>Sub Task</p>
            <table class="table table-borderless mt-5">
                <tbody>
                    <tr className=''>
                        <td>Develop the mockup</td>
                        <td>
                            <img src={userLogo} width="20" alt="not-available" /> MS, LS
                        </td>
                        <td>
                            <img src={timerLogo} width="20" alt="not-available" />01-03-2022
                        </td>
                        <td >
                            <span className='badge bg-success'
                                style={{ width: "50px", display: "inline-block" }}>
                            </span>
                        </td>
                        <td>
                            <TaskInfoModal />
                        </td>
                    </tr>
                    <tr className=''>
                        <td>Meeting</td>
                        <td>
                            <img src={userLogo} width="20" alt="not-available" /> LS, AK
                        </td>
                        <td>
                            <img src={timerLogo} width="20" alt="not-available" />01-03-2022
                        </td>
                        <td>
                            <span className='badge bg-danger'
                                style={{ width: "50px", display: "inline-block" }}>
                            </span>
                        </td>
                        <td >
                            <TaskInfoModal />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TaskInfo