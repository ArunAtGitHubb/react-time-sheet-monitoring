import React from 'react'

import Task from '../../Task/Task'

const ListView = (props) => {
    let style = {
        height: "58vh",
        overflow: "auto"
    }
    return (
        <div key={Math.random()} style={style}>
            {props.taskData.map((data, idx) => <Task data={data} main key={idx + Math.random()}/>)}
        </div>
    )
}

export default ListView