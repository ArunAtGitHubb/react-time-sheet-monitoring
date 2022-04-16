import React from 'react'
import Card from '../../Card'
import Task from '../Task'

const Subtask = (props) => {
    let header = ["Sub Task", "Status", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Work History"]
    let taskData = props.data

    return (
        <Card>
            <table className='table'>
                <thead style={{ position: "relative", left: "40px"}}>
                    {header.map(title => <th>{title}</th>)}
                </thead>
            </table>
            {taskData.map(data => <Task data={data} main={false} />)}
        </Card>

    )
}

export default Subtask