import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import Header from '../../shared/Header/Header'

const Info = (props) => {

    let header = ["Date", "Start Time", "End Time", "Duration", "Description", "Work History"]

    let [data, setData] = useState([])

    let taskData = [
        {
            name: "Arun",
            totalHours: "10:12",
            date: "",
            startTime: "",
            endTime: "",
        },
        {
            name: "Arun",
            totalHours: "10:12",
            date: "",
            startTime: "",
            endTime: "",
        },
        {
            name: "Steve",
            totalHours: "10:12",
            date: "",
            startTime: "",
            endTime: "",
        },
        {
            name: "Steve",
            totalHours: "10:12",
            date: "",
            startTime: "",
            endTime: "",
        }
    ]

    let dummy = []

    taskData.map(task => {
        console.log(task)
        if(dummy.length > 0){
            dummy.map((d, idx) => {
                console.log(task, d, task.name === d.name)
                if(d.userName === task.userName){
                    dummy[idx].works.push({
                        startTime: task.startTime,
                        endTime: task.endTime,
                        date: task.date
                    })
                }else{
                    dummy.push({
                        userName: task.name,
                        totalHours: task.totalHours,
                        works: [
                            {
                            startTime: task.startTime,
                            endTime: task.endTime,
                            date: task.date
                            }
                        ]
                    })
                }
            })
        }else{
            dummy.push({
                userName: task.name,
                totalHours: task.totalHours,
                works: [
                    {
                    startTime: task.startTime,
                    endTime: task.endTime,
                    date: task.date
                    }
                ]
            })
        }
    })

    useEffect(() => {
        let taskId = props.taskId
        let url = process.env.REACT_APP_HOST + `/api.php?require=work&taskid=${taskId}`
        axios.get(url).then(({data}) => {
            setData(data)
        }).catch(err => {
        })
    }, [])

    console.log("data", data)

    return (
        <>
            <table className='table'>
                <thead>
                    {header.map((title, idx) => <th key={idx}>{title}</th>)}
                </thead>
            </table>
            {data.constructor === Array ? data.map((task, idx) => {
                return <>
                    <Header header={{ section: [task.userName, `Total ${task.totalHours}`] }} />
                    <table className="table">
                        <tbody style={{ textAlign: "center" }}>
                                <tr key={idx}>
                                    <td>{task.Date}</td>
                                    <td>{task.startTime}</td>
                                    <td>{task.endTime}</td>
                                    <td>{task.Duration}</td>
                                    <td>{task.Description}</td>
                                    <td>
                                        <Modal title="Develop the form page" id="info" />
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </>
            }) : <h2>No tasks</h2>}
        </>
    )
}

export default Info