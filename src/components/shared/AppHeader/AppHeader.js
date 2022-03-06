import React from 'react'

const AppHeader = (props) => {
    return (
        <div className='row bg-success justify-content-center p-3 text-white h2'>{props.header}</div>
    )
}

export default AppHeader