import {createStore} from 'redux'

import rootReducer from './reducers/rootReducer'

let persistedState = JSON.parse(localStorage.getItem('state'))
persistedState = {...persistedState,posts:persistedState.posts.map(
    post => ({...post, created_datetime: new Date(post.created_datetime)})
)}

const store = createStore(rootReducer, persistedState ? persistedState : undefined)

store.subscribe(()=>{
    localStorage.setItem('state',JSON.stringify(store.getState()))
})

export default store