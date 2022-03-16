import React from 'react'

const Error = (props) => {
    return (
        <div className={"alert fade show alert-" + props.color} role="alert">
            <strong>{props.msg}</strong>
            {/* <button type="button" data-bs-dismiss="alert" ></button> */}
        </div>
    )
}

export default Error