import { combineReducers } from 'redux'
import { countReducer } from './counter'
import { messageReducer } from './message'

// 合并reducer函数
const rootReducers = combineReducers({
    counter: countReducer,
    message: messageReducer
})

export default rootReducers