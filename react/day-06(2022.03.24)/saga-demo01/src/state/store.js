import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
// 运行saga
sagaMiddleware.run(sagas)