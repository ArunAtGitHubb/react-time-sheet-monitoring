import React, { useState } from 'react'
import axios from 'axios'
import Badge from '../Badge'
import Subtask from './Subtask/Subtask'
import Modal from '../Modal/Modal'
import Card from '../Card'
import Info from './Subtask/Info'

const Task = (props) => {
    let data = props.data
    let style = { position: "relative", left: "-70px" }
    const [subTask, setSubTask] = useState([])

    const onClick = (id) => {
        console.log("clicked")
        let url = process.env.REACT_APP_HOST + `/api.php?require=task&rqstid=${id}`

        axios.get(url).then(res => {
            setSubTask(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='row m-1 mt-4 shadow'>
            <nav class="navbar navbar-expand navbar-light bg-light">
                <div class="row collapse navbar-collapse p-2" id="navbarNavDropdown">
                    <ul class="navbar-nav justify-content-between h6">
                        <a class="navbar-brand nav-link dropdown-toggle me-0"
                            style={{ width: "200px" }}
                            data-bs-toggle="collapse"
                            href={"#collapseExample" + data.id} role="button"
                            onClick={() => onClick(data.id)}>
                            {data.task}
                        </a>
                        <Badge text={data.status.msg} color={data.status.color} />
                        <li style={style}>{data.dueDate}</li>
                        <li style={style}>{data.dueStart}</li>
                        <li style={style}>{data.dueEnd}</li>
                        <li style={style}>{data.duration}</li>
                        <li style={style}>{data.assignee}</li>
                        <li style={style}>{data.budget}</li>
                        <Modal title={data.task} id="taskModal" />
                    </ul>
                </div>
            </nav>
            <div class="collapse ps-0"
                id={"collapseExample" + data.id}
                style={{ position: 'relative', left: "-10px", top: "10px" }}>
                <ul>
                    {props.isMain ? <Subtask data={subTask} /> : <Card><Info /></Card>}
                </ul>
            </div>
        </div >
    )
}

export default Task