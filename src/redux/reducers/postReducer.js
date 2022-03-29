import {ADDED_POST, DELETED_POST, EDITED_POST} from '../../actions'

const postReducer = (state = [], action) => {
    switch (action.type) {
        case ADDED_POST: 
            return [...state, action.payload.newPost]
        
        case DELETED_POST: 
            return state.filter(post => post.id !== action.payload.postId)

        case EDITED_POST: 
            return [
                ...state.filter(post => post.id !== action.payload.newPost.postId),
                action.payload.newPost
            ]
        default: 
            return state
    }
}

export default postReducer