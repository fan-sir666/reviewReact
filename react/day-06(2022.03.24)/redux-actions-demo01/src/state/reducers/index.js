import { combineReducers } from 'redux'
import searchReducer from './searchReducer'

// 合并reducer函数
const rootReducers = combineReducers({
    search: searchReducer
})


export default rootReducers