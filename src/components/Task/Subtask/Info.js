import React from 'react'
import Header from '../../shared/Header/Header'

const Info = (props) => {

    let header = ["Date", "Start Time", "End Time", "Duration", "Description", "Work History"]

    return (
        <>
            <ul className='d-flex justify-content-around list-unstyled h5'>
                {header.map(title => <li>{title}</li>)}
            </ul>
            <Header header={{ section: ["MS", "Total 10:10:25"] }} />
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Info