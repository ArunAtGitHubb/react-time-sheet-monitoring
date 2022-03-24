import React from 'react'
import Card from '../../Card'
import Header from '../../shared/Header/Header'
import Task from '../../Task/Task'

const StatusView = (props) => {
    let taskData = [{
        id: "1",
        task: "Develop the mockup",
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
        id: "2",
        task: "Team Meeting",
        status: {
            msg: "Open",
            color: "danger"
        },
        dueDate: "1-3-2022",
        dueStart: "1-1-2022",
        dueEnd: "1-3-2022",
        duration: "50:00:00",
        assignee: "MS,LB",
        budget: "$500",
    }, {
        id: "3",
        task: "Formation",
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
    }, {
        id: "4",
        task: "Development",
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
        id: "5",
        task: "Dev",
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
    }]

    let header = []
    const groupTheArray = (array) => {
        array.forEach((data) => {
            if (!header.includes(data.status.msg)) {
                header.push(data.status.msg)
            }
        })
    }

    groupTheArray(taskData)
    console.log("🚀 ~ file: StatusView.js ~ line 60 ~ StatusView ~ header", header)

    return (
        <>
            <div className='container-fluid'>
                <Card>
                    <h6 className='d-flex'>Status
                        <button onClick={() => props.onViewChange('list')}
                            className='ms-5 btn-close' />
                    </h6>
                </Card>
            </div>
            {header.map(text => {
                return (<>
                    <Header isArray text={text} header={{ section: "" }} />
                    {taskData.map(data => data.status.msg === text ? <Task isMain data={data} /> : null)}
                </>)
            })}
        </>
    )
}

export default StatusView