import {createStore} from 'redux'

import rootReducer from './reducers/rootReducer'

const persistedState = JSON.parse(localStorage.getItem('state'))

const store = createStore(rootReducer, persistedState ? persistedState : undefined)

store.subscribe(()=>{
    localStorage.setItem('state',JSON.stringify(store.getState()))
})

export default store