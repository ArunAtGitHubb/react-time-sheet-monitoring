import React from 'react'
import Modal from '../../Modal/Modal'
import Header from '../../shared/Header/Header'

const Info = (props) => {

    let header = ["Date", "Start Time", "End Time", "Duration", "Description", "Work History"]

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
                    <tr>
                        <td>01-01-2022</td>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>Develop the form page</td>
                        <td>
                            <Modal title="Develop the form page" id="info" />
                        </td>
                    </tr>
                    <tr>
                        <td>01-01-2022</td>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>Develop the form page</td>
                        <td>
                            <Modal title="Develop the form page" id="info" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Info