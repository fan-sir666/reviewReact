import { SEARCH_ERROR, SEARCH_START, SEARCH_SUCCESS } from "../action-types/appActionType"


const initialState = {
    list: [],
    loading: false,
    error: null,
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_START:
            return {
                loading: true,
                error: null,
                list: [],
            }
        case SEARCH_SUCCESS:
            return {
                loading: false,
                error: null,
                list: action.payload,
            }
        case SEARCH_ERROR:
            return {
                loading: false,
                error: action.error,
                list: [],
            }
        default:
            return state
    }
}