import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import Card from '../../Card'
import Header from '../../shared/Header/Header'
import Task from '../../Task/Task'

const StatusView = (props) => {
    const { projects } = useContext(AppContext)


    let header = []
    const groupTheArray = (array) => {
        array.forEach((data) => {
            if (!header.includes(data.status.msg)) {
                header.push(data.status.msg)
            }
        })
    }

    groupTheArray(projects)

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
                    {projects.map(project =>
                        project.status.msg === text ? <Task isMain data={project} /> : null)}
                </>)
            })}
        </>
    )
}

export default StatusView