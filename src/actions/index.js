const SINGUP = 'USER/SINGUP'
const FETCHED_POST = 'POST/FETCHED_POST'

const singupAction = (user) => ({
    type: SINGUP,
    payload: {user}
})


const fetchPost = (posts) => ({
    type: FETCHED_POST,
    payload: {posts}
})

export {singupAction, fetchPost, SINGUP, FETCHED_POST}