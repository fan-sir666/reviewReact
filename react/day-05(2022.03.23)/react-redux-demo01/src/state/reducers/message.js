import { SAVE_MSG } from "../action-types/message";

const initialState = { msg: '' }

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_MSG:
            return { msg: action.payload }
        default:
            return state;
    }
}