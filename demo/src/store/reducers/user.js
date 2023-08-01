import { LOGIN_SETTOKEN, GET_USERINFO, CLEAR_USERINFO } from "../action-types/user";
const initialState = {
    token: '',
    userInfo: {}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SETTOKEN:
            return {
                ...state,
                token: action.payload
            }
        case GET_USERINFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case CLEAR_USERINFO:
            return initialState
        default:
            return state
    }
}

export default user