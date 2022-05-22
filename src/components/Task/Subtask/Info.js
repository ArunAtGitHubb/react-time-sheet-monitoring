import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import Header from '../../shared/Header/Header'

const Info = (props) => {

    let header = ["Date", "Duration", "Description", "Work History"]

    let [data, setData] = useState([])

    useEffect(() => {
        let taskId = props.taskId
        let url = process.env.REACT_APP_HOST + `/api.php?require=work&taskid=${taskId}`
        axios.get(url).then(({data}) => {
            setData(data)
        }).catch(err => {
        })
    }, [])

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
                    <table className="table" key={idx}>
                        <tbody style={{ textAlign: "center" }}>
                            {task.works.map((work, idx) => {
                                return <tr key={idx}>
                                    <td>{work.Date}</td>
                                    <td>{work.Duration}</td>
                                    <td>{work.Description}</td>
                                    <td>
                                        <Modal title="Develop the form page" id="info" />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </>
            }) : <h2>No tasks</h2>}
        </>
    )
}

export default Info