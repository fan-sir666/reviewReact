import { ADD_COUNT, MINUS_COUNT } from "../action-types/counter"

export const addNum = (payload) => {
    return {
        type: ADD_COUNT, payload
    }
}

export const minusNum = (payload) => {
    return {
        type: MINUS_COUNT, payload
    }
}