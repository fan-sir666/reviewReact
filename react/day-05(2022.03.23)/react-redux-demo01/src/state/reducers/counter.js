import { ADD_COUNT, MINUS_COUNT } from '../action-types/counter'
const initialState = { count: 10 }

export function countReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return { count: state.count + action.payload }
        case MINUS_COUNT:
            return { count: state.count - action.payload }
        default:
            return state
    }
}
