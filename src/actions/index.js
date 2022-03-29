const SINGUP = 'SINGUP'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_POST = 'EDIT_POST'

const singupAction = (user) => ({
    type: SINGUP,
    payload: {user}
})

const addPost = (newPost) => ({
    type: ADD_POST,
    payload: {newPost}
})

const deletePost = (postId) =>({
    type: DELETE_POST,
    payload: {postId}
})

const editPost = (newPost) => ({
    type: EDIT_POST,
    payload: {newPost}
})

export {singupAction, addPost, deletePost, editPost}