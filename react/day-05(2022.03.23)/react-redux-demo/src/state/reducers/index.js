import { combineReducers } from "redux";
import counterReducer from "./counter";
import messageReducer from "./message";

// 合并reducer函数
const rootReducer = combineReducers({
    counter: counterReducer,
    message: messageReducer
})

export default rootReducer