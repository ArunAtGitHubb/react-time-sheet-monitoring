import React from 'react'
import Modal from '../../Modal/Modal'
import Header from '../../shared/Header/Header'

const Info = (props) => {

    let header = ["Date", "Start Time", "End Time", "Duration", "Description", "Work History"]

    return (
        <>
            <ul className='d-flex justify-content-around list-unstyled h5'>
                {header.map(title => <li>{title}</li>)}
            </ul>
            <Header header={{ section: ["MS", "Total 10:10:25"] }} />
            <table class="table">
                <tbody style={{ textAlign: "center" }}>
                    <tr>
                        <th scope="row">01-01-2022</th>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>Develop the form page</td>
                        <Modal title="Develop the form page" id="info" />
                    </tr>
                    <tr>
                        <th scope="row">01-01-2022</th>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>10:30:55</td>
                        <td>Develop the form page</td>
                        <Modal title="Develop the form page" id="info" />
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Info