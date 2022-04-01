import {ADDED_POST, DELETED_POST, EDITED_POST, FETCHED_POST} from '../../actions'

const postReducer = (state = [], action) => {
    switch (action.type) {
        case ADDED_POST: 
            return [...state, action.payload.newPost]
        
        case DELETED_POST: 
            return state.filter(post => post.id !== action.payload.postId)

        case EDITED_POST: 
            
            return [
                ...state.filter(post => post.id !== action.payload.newPost.id),
                action.payload.newPost
            ]
        case FETCHED_POST:
            return action.payload.posts
        default: 
            return state
    }
}

export default postReducer