import React from 'react'

import Task from '../../Task/Task'

const ListView = (props) => {
    return (
        <>{props.taskData.map(data => <Task data={data} main />)}</>
    )
}

export default ListView