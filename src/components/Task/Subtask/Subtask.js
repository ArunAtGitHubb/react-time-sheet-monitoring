import React from 'react'
import Card from '../../Card'
import Task from '../Task'

const Subtask = (props) => {
    let header = ["Task", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Budget", "Status", "Work History"]
    let taskData = props.data

    let thStyle = {
        width: "85px"
    }

    return (
        <Card>
            <table className='table'>
                <thead>
                    {header.map((title, idx) => <th style={idx === 0 ? {width: "50%"} : thStyle}>{title}</th>)}
                </thead>
            </table>
            {taskData.map(data => <Task data={data} main={false} />)}
        </Card>

    )
}

export default Subtask