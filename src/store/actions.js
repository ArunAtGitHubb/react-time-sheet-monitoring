export const USER_ID = "USERID"
export const PROJECT_ID = "ProjectId"
export const REQUEST_ID = "requestId"
export const TASK_ID = "TaskId"

export const SET_USER_ID = "setUserId"
export const SET_PROJECT_ID = "setProjectId"
export const SET_REQUEST_ID = "setRequestId"
export const SET_TASK_ID = "setTaskId"

export const userId = () => ({ type: USER_ID })
export const projectId = () => ({ type: PROJECT_ID })
export const requestId = () => ({ type: REQUEST_ID })
export const taskId = () => ({ type: TASK_ID })

export const setUserId = (id) => ({ type: SET_USER_ID, userId: id })
export const setProjectId = (id) => ({ type: SET_PROJECT_ID, projectId: id })
export const setRequestId = (id) => ({ type: SET_REQUEST_ID, requestId: id })
export const setTaskId = (id) => ({ type: SET_TASK_ID, taskId: id })