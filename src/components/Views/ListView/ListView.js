import React from 'react'

import Task from '../../Task/Task'

const ListView = (props) => {
    return (
        <div key={Math.random()}>
            {props.taskData.map((data, idx) => <Task data={data} main key={idx + Math.random()}/>)}
        </div>
    )
}

export default ListView