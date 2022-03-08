import React from 'react'

const Badge = (props) => {
    return (
        <span style={{ position: "relative", left: "-60px", width: "100px" }}
            class={"badge align-self-center rounded-pill bg-" + props.color}>{props.text}
        </span>
    )
}

export default Badge