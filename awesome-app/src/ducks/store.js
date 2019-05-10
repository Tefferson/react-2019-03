import counter from './counter/counter'
import ticTacToe from './tic-tac-toe/tic-tac-toe'
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const reducers = combineReducers({ counter, ticTacToe })

const store = createStore(reducers, applyMiddleware(logger))

export default store
