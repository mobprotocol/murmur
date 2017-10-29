import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import ipfs from './reducers/ipfs'

export default createStore(ipfs, applyMiddleware(thunk))
