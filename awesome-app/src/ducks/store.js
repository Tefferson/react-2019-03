import thunk from 'redux-thunk'
import logger from 'redux-logger'
import counter from './counter/counter'
import ticTacToe from './tic-tac-toe/tic-tac-toe'
import authentication from './authentication/authentication'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const reducers = combineReducers({ counter, ticTacToe, authentication })

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store
