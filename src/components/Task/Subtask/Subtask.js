import React from 'react'
import Card from '../../Card'
import Task from '../Task'

const Subtask = (props) => {
    let header = ["Sub Task", "Status", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Work History"]
    let taskData = props.data

    let style = {
        position: "relative",
        left: "70px"
    }

    return (
        <Card>
            <ul className='d-flex justify-content-around list-unstyled h5'>
                {header.map(title => <li style={title === 'Status' ? style : null}>{title}</li>)}
            </ul>
            {taskData.map(data => <Task data={data} />)}
        </Card>

    )
}

export default Subtask