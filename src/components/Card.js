import React from 'react'

const Card = (props) => {
    return (
        <div className='row'>
            <div className='card bg-light'>
                <div className='card-body'>{props.children}</div >
            </div >
        </div >
    )
}

export default Card