import { SAVE_MESSAGE } from "../action-types/message";
// 初始状态
const messageInitialState = { value: "" };
export default function messageReducer(state = messageInitialState, action) {
    switch (action.type) {
        case SAVE_MESSAGE:
            return { ...state, value: action.payload }
        default:
            return state
    }
}