import React from 'react'
import axios from 'axios'

import imageIcon from '../../../../assets/png/image_icon.png'
import calanderIcon from '../../../../assets/png/calander_icon.png'

import Modal from '../../../Modal/Modal'
import TaskInfo from '../../../Task/Info/TaskInfo'
import './Kanban.css'

const KanbanCard = (props) => {

    console.log(props.data.id)

    const onCardClick = () => {
        let url = process.env.REACT_APP_HOST + `/api.php?require=task&rqstid=${props.data.id}`
        console.log("getting", url)
        axios.get(url).then(res => {
            console.log(res.data)
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
            onClick={onCardClick}>
                <span className='h5'>{props.data.task}</span>
                <div className='d-flex justify-content-around links'>
                    <img src={imageIcon} alt="not" width="25" className='screenshot-img' />
                    <div className='calander d-inline-block'>
                        <img src={calanderIcon} alt="not" width="25" className='calander-img' />
                        <span className='date'>{props.data.dateRecieved}</span>
                    </div>
                </div>
            </div>
            <Modal noBtn id="kanbanCard" title="Task Info">
                {<TaskInfo id={props.data.id} assignee={props.data.assign} request={props.data.task} date={props.data.dateRecieved} duration={props.data.duration}/> }
            </Modal>
        </>
    )
}

export default KanbanCard