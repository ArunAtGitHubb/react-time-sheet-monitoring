import React from 'react'

import imageIcon from '../../../../assets/png/image_icon.png'
import calanderIcon from '../../../../assets/png/calander_icon.png'
import userIcon from '../../../../assets/png/user_icon.png'

import './Kanban.css'

const KanbanCard = (props) => {
    return (
        <div className={'p-5 callout callout-' + props.theme}>
            <span className='header h5'>Team Meeting</span>
            <img src={imageIcon} alt="not" width="25" className='screenshot-img' />
            <div className='calander d-inline-block'>
                <img src={calanderIcon} alt="not" width="25" className='calander-img' />
                <span className='date'>Feb 15</span>
            </div>
            <img src={userIcon} alt="not" width="25" className='user-img' />
        </div>
    )
}

export default KanbanCard