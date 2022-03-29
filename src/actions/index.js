const SINGUP = 'USER/SINGUP'
const ADDED_POST = 'POST/ADDED_POST'
const DELETED_POST = 'POST/DELETED_POST'
const EDITED_POST = 'POST/EDITED_POST'

const singupAction = (user) => ({
    type: SINGUP,
    payload: {user}
})

const addPostAction = (newPost) => ({
    type: ADDED_POST,
    payload: {newPost}
})

const deletePostAction = (postId) =>({
    type: DELETED_POST,
    payload: {postId}
})

const editPostAction = (newPost) => ({
    type: EDITED_POST,
    payload: {newPost}
})

export {singupAction, addPostAction, deletePostAction, editPostAction, SINGUP, ADDED_POST, DELETED_POST, EDITED_POST}