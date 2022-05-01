import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddTask from '../../Modal/AddTask'
import axios from 'axios'

import KanbanCard from './KanbanCard/KanbanCard'
import Spinner from '../../Spinner/Spinner'

const KanbanView = (props) => {

    let data = [{
        type: "open",
        cardData: {
            title: "Team Meeting",
            date: "Feb 01"
        }
    }, {
        type: "open",
        cardData: {
            title: "Team Meeting",
            date: "Feb 01"
        }
    }, {
        type: "in-progress",
        cardData: {
            title: "Team Meeting",
            date: "Feb 01"
        }
    }, {
        type: "to-be-validate",
        cardData: {
            title: "Team Meeting",
            date: "Feb 01"
        }
    }, {
        type: "in-progress",
        cardData: {
            title: "Team Meeting",
            date: "Feb 01"
        }
    }]

    let open = []
    let progress = []
    let toBeValidate = []
    let validate = []
    let review = []
    let closed = []

    let [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        props.taskData.map(data => {
            switch (data.status.msg) {
                case 'Open':
                    open.push(data)
                break;
                case 'In-progress':
                    progress.push(data)
                break;
                case 'To-be-validate':
                    toBeValidate.push(data)
                break;
                case 'Validated':
                    validate.push(data)
                break;
                case 'Client-Review':
                    review.push(data)
                break;
                case 'Closed':
                    closed.push(data)
                break;
                default:
                    break;
            }
        })
        setLoad(false)
    }, [])

    console.log("open", open, "closed", closed)

    return (
        <div className='row justify-content-around'>
            {load && <Spinner />}
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-danger'>Open</h2>
                {props.taskData.map((card, idx) => card.status.msg === 'Open' ? <KanbanCard key={idx} theme="danger" data={card} /> : null)}
                <AddTask />
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-success'>In Progress</h2>
                {progress.map((card, idx) => card.status.msg === 'In-progress' ? <KanbanCard key={idx} theme="primary" data={card} /> : null)}
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-info'>To Be Validate</h2>
                {toBeValidate.map((card, idx) => card.status.msg === 'To-be-validate' ? <KanbanCard key={idx} theme="info" data={card} /> : null)}
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-success'>Validated</h2>
                {validate.map((card, idx) => card.status.msg === 'Validated' ? <KanbanCard key={idx} theme="primary" data={card} /> : null)}
            </div>
            <div className='col-lg-2 mt-4'>
                <h2 className='d-flex justify-content-center bg-info'>Client Review</h2>
                {review.map((card, idx) => card.status.msg === 'Client-Review' ? <KanbanCard key={idx} theme="info" data={card} /> : null)}
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