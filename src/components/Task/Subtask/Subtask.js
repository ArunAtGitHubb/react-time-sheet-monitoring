import React from 'react'
import Card from '../../Card'
import Task from '../Task'

const Subtask = (props) => {
    let header = ["Task", "Estimate Due Date", "Due Start", "Due End", "Duration", "Assignee", "Status", "Work History"]
    let taskData = props.data

    let thStyle = {
        width: "85px"
    }

    return (
        <Card>
            <table className='table'>
                <thead>
                    {header.map((title, idx) =>  <td style={idx === 0 ? {width: "42%"} : thStyle} key={idx}>{title}</td>)}
                </thead>
            </table>
            {taskData.map((data, idx) => <Task data={data} main={false} key={idx + Math.random()} />)}
        </Card>

    )
}

export default Subtask