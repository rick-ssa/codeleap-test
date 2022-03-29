import {SINGUP} from '../actions'

const userReducer = (state='', action) => {
    if(action.type === SINGUP) {
        return action.payload.user
    }

    return state
}

export default userReducer