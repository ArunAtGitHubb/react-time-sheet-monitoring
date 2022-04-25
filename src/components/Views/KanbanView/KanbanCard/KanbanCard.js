import React from 'react'

import imageIcon from '../../../../assets/png/image_icon.png'
import calanderIcon from '../../../../assets/png/calander_icon.png'

import Modal from '../../../Modal/Modal'
import TaskInfo from '../../../Task/Info/TaskInfo'
import './Kanban.css'

const KanbanCard = (props) => {

    return (
        <>
            <div className={'p-4 mt-3 mb-3 callout callout-' + props.theme} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#kanbanCard">
                <span className='h5'>{props.data.title}</span>
                <div className='d-flex justify-content-around links'>
                    <img src={imageIcon} alt="not" width="25" className='screenshot-img' />
                    <div className='calander d-inline-block'>
                        <img src={calanderIcon} alt="not" width="25" className='calander-img' />
                        <span className='date'>{props.data.date}</span>
                    </div>
                </div>
            </div>
            <Modal noBtn id="kanbanCard" title="Task Info">
                <TaskInfo />
            </Modal>
        </>
    )
}

export default KanbanCard