import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)