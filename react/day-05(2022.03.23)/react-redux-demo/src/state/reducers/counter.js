import { INCREMENT } from "../action-types/counter";
// 初始状态
const counterInitialState = { count: 0 };

export default function counterReducer(state = counterInitialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload }
        default:
            return state
    }
}