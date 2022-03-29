const SINGUP = 'USER/SINGUP'
const ADDED_POST = 'POST/ADDED_POST'
const DELETED_POST = 'POST/DELETED_POST'
const EDITED_POST = 'POST/EDITED_POST'

const singupAction = (user) => ({
    type: SINGUP,
    payload: {user}
})

const addPostAction = (newPost) => {
    const created_datetime = new Date()
    const id = created_datetime.getTime()
    return ({
        type: ADDED_POST,
        payload: {
            newPost: {...newPost, id, created_datetime}
        }
    })
}

const deletePostAction = (postId) =>({
    type: DELETED_POST,
    payload: {postId}
})

const editPostAction = (newPost) => ({
    type: EDITED_POST,
    payload: {newPost}
})

export {singupAction, addPostAction, deletePostAction, editPostAction, SINGUP, ADDED_POST, DELETED_POST, EDITED_POST}