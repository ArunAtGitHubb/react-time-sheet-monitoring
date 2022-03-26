import * as actions from "../actions"

const initialState = {
    projectId: null,
    requstId: null,
    taskId: null
}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.SET_PROJECT_ID: 
            return {
                ...state,
                projectId: action.projectId
            }
        case actions.SET_REQUEST_ID: 
            return {
                ...state,
                requstId: action.requstId
            }
        case actions.SET_TASK_ID:
            return {
                ...state,
                taskId: action.taskId
            }
        default:
            return state
    }
}


export default projectReducer
