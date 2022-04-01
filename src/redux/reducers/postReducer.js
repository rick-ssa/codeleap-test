import {ADDED_POST, DELETED_POST, EDITED_POST, FETCHED_POST} from '../../actions'

const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCHED_POST:
            return action.payload.posts
        default: 
            return state
    }
}

export default postReducer