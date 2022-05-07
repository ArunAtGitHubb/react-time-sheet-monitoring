import React, { useEffect, useState } from 'react'
import Badge from '../../Badge'
import Card from '../../Card'

import userLogo from '../../../assets/png/user_icon.png'
import calanderLogo from '../../../assets/png/calander_icon.png'
import timerLogo from '../../../assets/png/timer_icon.png'
import TaskInfoModal from "../../Modal/Kanban/TaskInfo/TaskInfo.js"

import './TaskInfo.css'

const TaskInfo = (props) => {

    let tasks = props.tasks

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
                            <td>{props.assignee}</td>
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
                        {tasks.map(task =>{
                            return(
                                <>
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
                                </>
                            )
                        })}
                        
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TaskInfo