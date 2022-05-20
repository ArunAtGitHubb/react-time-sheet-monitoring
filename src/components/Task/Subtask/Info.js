import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import Header from '../../shared/Header/Header'

const Info = (props) => {

    let header = ["Date", "Start Time", "End Time", "Duration", "Description", "Work History"]

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
            <Header header={{ section: ["MS", "Total 10:10:25"] }} />
            <table className="table">
                <tbody style={{ textAlign: "center" }}>
                    {data.map(task => {
                        return (<tr>
                            <td>{task.Date}</td>
                            <td>10:30:55</td>
                            <td>10:30:55</td>
                            <td>{task.Duration}</td>
                            <td>{task.Description}</td>
                            <td>
                                <Modal title="Develop the form page" id="info" />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Info