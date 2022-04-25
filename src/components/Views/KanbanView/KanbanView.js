import React from 'react'
import { connect } from 'react-redux'
import AddTask from '../../Modal/AddTask'

import KanbanCard from './KanbanCard/KanbanCard'

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

    console.log(props.projectId)

    return (
        <div className='row justify-content-around'>
            <div className='col-lg-3 mt-4'>
                <h2 className='d-flex justify-content-center bg-danger'>Open</h2>
                {data.map((card, idx) => card.type === 'open' ? <KanbanCard key={idx} theme="danger" data={card.cardData} /> : null)}
                <div></div>
                <AddTask />
            </div>
            <div className='col-lg-3 mt-4'>
                <h2 className='d-flex justify-content-center bg-success'>In Progress</h2>
                {data.map((card, idx) => card.type === 'in-progress' ? <KanbanCard key={idx} theme="primary" data={card.cardData} /> : null)}
            </div>
            <div className='col-lg-3 mt-4'>
                <h2 className='d-flex justify-content-center bg-info'>To Be Validate</h2>
                {data.map((card, idx) => card.type === 'to-be-validate' ? <KanbanCard key={idx} theme="info" data={card.cardData} /> : null)}
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