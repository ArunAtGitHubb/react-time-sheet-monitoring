import React, { useState } from 'react'
import axios from 'axios'

import imageIcon from '../../../../assets/png/image_icon.png'
import calanderIcon from '../../../../assets/png/calander_icon.png'

import Modal from '../../../Modal/Modal'
import TaskInfo from '../../../Task/Info/TaskInfo'
import './Kanban.css'
import TaskInfoModal from '../../../Modal/TaskInfoModal'

const KanbanCard = (props) => {

    
    const [task, setTask] = useState(props.data)
    console.log(props.data.id, task)

    const onCardClick = (id) => {
        console.log("card clicked", id)
        let url = process.env.REACT_APP_HOST + `/api.php?require=task&rqstid=${id}`
        axios.get(url).then(res => {
            console.log("card data" ,res.data)
            setTask(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className={'p-4 mt-3 mb-3 callout callout-' + props.theme} 
            style={{ cursor: "pointer" }} 
            data-bs-toggle="modal" 
            data-bs-target="#kanbanCard"
            onClick={() => onCardClick(props.data.id)}>
                <span className='h5'>{props.data.task}</span>
                <div className='d-flex justify-content-around links'>
                    <img src={imageIcon} alt="not" width="25" className='screenshot-img' />
                    <div className='calander d-inline-block'>
                        <img src={calanderIcon} alt="not" width="25" className='calander-img' />
                        <span className='date'>{props.data.dateRecieved}</span>
                    </div>
                </div>
            </div>
            <TaskInfoModal>
                {<TaskInfo task={task}/> }
            </TaskInfoModal>
        </>
    )
}

export default KanbanCard