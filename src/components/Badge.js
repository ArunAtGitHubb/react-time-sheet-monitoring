import React from 'react'

const Badge = (props) => {
    return (
        <span style={{ width: "100px" }}
            className={"badge align-self-center rounded-pill bg-" + props.color}>{props.text}
        </span>
    )
}

export default Badge