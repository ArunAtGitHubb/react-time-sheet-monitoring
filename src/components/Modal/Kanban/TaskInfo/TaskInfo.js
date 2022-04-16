import React from 'react'

import './TaskInfo.css'

const TaskInfo = (props) => {
    return(
    <>
    
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="taskInfoModal">
            View
        </button>
        <div className="modal-taskInfo fade-taskInfo" id="taskInfoModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1">
            <div className="modal-dialog-taskInfo modal-lg-taskInfo modal-dialog-centered-taskInfo modal-dialog-scrollable-taskInfo">
                <div className="modal-content-taskInfo w-100">
                    <div className="modal-header-taskInfo bg-success">
                        <h5 className="modal-title-taskInfo">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body-taskInfo p-4">
                        <h1>Hello task Info</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default TaskInfo