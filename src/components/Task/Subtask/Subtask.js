import React from 'react'
import Card from '../../Card'
import Task from '../Task'

const Subtask = (props) => {
    let header = ["Sub Task", "Status", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Work History"]
    let taskData = [{
        id: "s1",
        task: "Develop the client Area",
        status: {
            msg: "In Progress",
            color: "success"
        },
        dueDate: "1-3-2022",
        dueStart: "1-1-2022",
        dueEnd: "1-3-2022",
        duration: "50:00:00",
        assignee: "MS,LB",
        budget: "$500",
    }, {
        id: "s2",
        task: "Meeting",
        status: {
            msg: "Completed",
            color: "danger"
        },
        dueDate: "1-3-2022",
        dueStart: "1-1-2022",
        dueEnd: "1-3-2022",
        duration: "50:00:00",
        assignee: "MS,LB",
        budget: "$500",
    }, {
        id: "s3",
        task: "Design",
        status: {
            msg: "To be validate",
            color: "info"
        },
        dueDate: "1-3-2022",
        dueStart: "1-1-2022",
        dueEnd: "1-3-2022",
        duration: "50:00:00",
        assignee: "MS,LB",
        budget: "$500",
    }]
    return (
        <Card>
            <ul className='d-flex justify-content-around list-unstyled h5'>
                {header.map(title => <li>{title}</li>)}
            </ul>
            {taskData.map(data => <Task data={data} />)}
        </Card>

    )
}

export default Subtask