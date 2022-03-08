import React from 'react'

import KanbanCard from './KanbanCard/KanbanCard'

const KanbanView = (props) => {
    return (
        <div className='row d-flex justify-content-around'>
            <div className='col-3'>
                <KanbanCard theme="danger" />
                <button style={{
                    position: "relative",
                    left: "100px"
                }} className='btn btn-success w-50 text-white'>+ Add</button>
            </div>
            <div className='col-3'>
                <KanbanCard theme="primary" />
                <KanbanCard theme="primary" />
            </div>
            <div className='col-3'>
                <KanbanCard theme="info" />
                <KanbanCard theme="info" />
            </div>
        </div>
    )
}

export default KanbanView