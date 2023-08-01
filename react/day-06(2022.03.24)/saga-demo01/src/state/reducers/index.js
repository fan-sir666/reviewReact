import { combineReducers } from 'redux'
import appReducer from './appReducer'

// 合并reducer
const rootReducers = combineReducers({
    appseach: appReducer
})

export default rootReducers