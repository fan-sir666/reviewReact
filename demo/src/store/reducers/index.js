import {combineReducers} from 'redux'

import user from './user'
import article from './article'

// 合并reducer
const rootReducer = combineReducers({
    user,
    article
})

export default rootReducer