import React from 'react'
import { connect } from 'react-redux'
import AddTask from '../../Modal/AddTask'

import KanbanCard from './KanbanCard/KanbanCard'

const KanbanView = (props) => {

    return (
        <div className='row justify-content-around'>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-danger'>Open</h2>
                {props.taskData.map((card, idx) => card.status.msg === 'Open' ? <KanbanCard key={idx} theme="danger" data={card} /> : null)}
                <AddTask />
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-success'>In Progress</h2>
                {props.taskData.map((card, idx) => card.status.msg === 'In-progress' ? <KanbanCard key={idx} theme="primary" data={card} /> : null)}
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-info'>To Be Validate</h2>
                {props.taskData.map((card, idx) => card.status.msg === 'To-be-validate' ? <KanbanCard key={idx} theme="info" data={card} /> : null)}
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-success'>Validated</h2>
                {props.taskData.map((card, idx) => card.status.msg === 'Validated' ? <KanbanCard key={idx} theme="primary" data={card} /> : null)}
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-info'>Client Review</h2>
                {props.taskData.map((card, idx) => card.status.msg === 'Client-Review' ? <KanbanCard key={idx} theme="info" data={card} /> : null)}
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-success'>Closed</h2>
                {props.taskData.map((card, idx) => card.status.msg === 'Closed' ? <KanbanCard key={idx} theme="success" data={card} /> : null)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        projectId: state.project.projectId
    }
}

export default connect(mapStateToProps)(KanbanView)