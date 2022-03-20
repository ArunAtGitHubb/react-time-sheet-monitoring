import React from 'react'
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

    return (
        <div className='row d-flex justify-content-around'>
            <div className='col-lg-3'>
                {data.map((card, idx) => card.type === 'open' ? <KanbanCard key={idx} theme="danger" data={card.cardData} /> : null)}
                <AddTask />
            </div>
            <div className='col-lg-3'>
                {data.map((card, idx) => card.type === 'in-progress' ? <KanbanCard key={idx} theme="primary" data={card.cardData} /> : null)}
            </div>
            <div className='col-lg-3'>
                {data.map((card, idx) => card.type === 'to-be-validate' ? <KanbanCard key={idx} theme="info" data={card.cardData} /> : null)}
            </div>
        </div>
    )
}

export default KanbanView