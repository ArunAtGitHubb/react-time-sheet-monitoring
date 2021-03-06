import React, { useState } from 'react'
import axios from 'axios'
import Badge from '../Badge'
import Subtask from './Subtask/Subtask'
import Card from '../Card'
import Info from './Subtask/Info'
import ScreenShot from '../Modal/ScreenShot'

const Task = (props) => {
    let data = props.data
    const [subTask, setSubTask] = useState([])
    const [isMain] = useState(props.main)

    const onClick = (id) => {
        if(isMain){
            let url = process.env.REACT_APP_HOST + `/api.php?require=task&rqstid=${id}`
            axios.get(url).then(res => {
                setSubTask(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <div className='row m-1 mt-4 shadow' key={props.unique}>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="row collapse navbar-collapse p-2" id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-between h6">
                        <a className="navbar-brand nav-link dropdown-toggle me-0"
                            style={{ width: "42%", overflow: "auto" }}
                            data-bs-toggle="collapse"
                            href={"#collapseExample" + data.id} role="button"
                            onClick={() => onClick(data.id)}>
                            {data.task}
                        </a>
                        <li>{data.dueDate}</li>
                        <li>{data.dateRecieved}</li>
                        <li>{data.dueEnd}</li>
                        <li>{data.duration}</li>
                        <li style={{width: "120px", height: "200px", overflow: "auto"}}>{data.assign.constructor === Array ? data.assign.map(assignee => {
                            return <p>{assignee}</p>
                        }) : <p>{data.assign}</p>}</li>
                        <Badge text={data.status.msg} color={data.status.color} />
                        <ScreenShot reqId={data.id}/>
                    </ul>
                </div>
            </nav>
            <div className="collapse ps-0"
                id={"collapseExample" + data.id}
                style={{ position: 'relative', left: "-10px", top: "10px" }}>
                <ul>
                    {props.main ? <Subtask data={subTask} /> : <Card><Info taskId={data.id} /></Card>}
                </ul>
            </div>
        </div >
    )
}

export default Task