import * as actions from '../actions'

const initialState = {
    userId: JSON.parse(localStorage.getItem("userId")) || null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_USER_ID:
            console.log("id", action.userId)
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state
    }
}

export default userReducer
