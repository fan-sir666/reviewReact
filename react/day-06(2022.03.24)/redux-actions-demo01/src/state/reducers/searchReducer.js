import { handleActions as createReducer } from "redux-actions"
import { searchError, searchStart, searchSuccess } from "../action-creator"

const initialState = {
    list: [],
    loading: false,
    error: null,
}
const searchReducer = createReducer({
    [searchStart]: (state) => ({
        ...state,
        loading: true
    }),
    [searchSuccess]: (state,action) => {
        // console.log(action.payload);
        return ({
            ...state,
            loading:false,
            list: action.payload
        })
    },
    [searchError]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload
    }),
}, initialState)


export default searchReducer