import React from 'react'

const Error = (props) => {
    return (
        <div className={"alert fadeshow alert-" + props.color} role="alert">
            <strong>{props.msg}</strong>
        </div>
    )
}

export default Error